"""画像最適化: 全画像をJPG品質85+最大幅1600pxに統一する。
- PNG → JPG変換（透過は不要な写真コンテンツのため）
- 元ファイルは削除
- リサイズ: 横幅>1600px なら1600pxに縮小
- 出力: .jpg (品質85, progressive, optimize)
"""
from PIL import Image
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
IMG_DIR = ROOT / "public" / "images"
MAX_W = 1600
QUALITY = 85

# 対象ディレクトリ (logo等はスキップ)
TARGETS = [IMG_DIR / "awards", IMG_DIR / "company", IMG_DIR / "services", IMG_DIR / "works"]

total_before = 0
total_after = 0
renames = []  # (old_relpath, new_relpath) for source code updates

for target_dir in TARGETS:
    if not target_dir.exists():
        continue
    for src in sorted(target_dir.iterdir()):
        if src.suffix.lower() not in {".png", ".jpg", ".jpeg"}:
            continue
        before_size = src.stat().st_size
        total_before += before_size

        img = Image.open(src)
        # RGBA -> RGB (白背景でフラット化)
        if img.mode in ("RGBA", "LA"):
            bg = Image.new("RGB", img.size, (255, 255, 255))
            bg.paste(img, mask=img.split()[-1])
            img = bg
        elif img.mode != "RGB":
            img = img.convert("RGB")

        # リサイズ
        if img.width > MAX_W:
            new_h = int(img.height * (MAX_W / img.width))
            img = img.resize((MAX_W, new_h), Image.LANCZOS)

        # 拡張子をjpgに統一
        dst = src.with_suffix(".jpg")
        # 一旦bufferにsave → srcが.pngの場合、dst != src なので問題ないが
        # src=.jpg かつ dst=.jpg の場合は同一パスなのでそのまま上書き
        img.save(dst, "JPEG", quality=QUALITY, optimize=True, progressive=True)

        # PNG → JPG に変わった場合は元のPNGを削除
        if src.suffix.lower() != ".jpg":
            src.unlink()

        after_size = dst.stat().st_size
        total_after += after_size

        old_rel = str(src.relative_to(ROOT / "public")).replace("\\", "/")
        new_rel = str(dst.relative_to(ROOT / "public")).replace("\\", "/")
        if old_rel != new_rel:
            renames.append((f"/{old_rel}", f"/{new_rel}"))
        print(f"  {dst.name:40s}  {before_size//1024:5d}KB -> {after_size//1024:5d}KB")

print(f"\n合計: {total_before/1024/1024:.1f}MB -> {total_after/1024/1024:.1f}MB  ({(1-total_after/total_before)*100:.1f}% 削減)")
print(f"\nリネーム一覧 ({len(renames)}件):")
for o, n in renames:
    print(f"  {o}  ->  {n}")
