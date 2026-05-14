"""OGP画像(1200x630)を生成する。
背景: #f5f5f7 (apple-bg) / 主文字: #1d1d1f / アクセント: #0066cc
ロゴ: public/logo.png を左寄せ配置
右側: タグライン+事業領域+地域
"""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LOGO = ROOT / "public" / "logo.png"
OUT = ROOT / "public" / "og-image.png"

W, H = 1200, 630
BG = (255, 255, 255)
INK = (29, 29, 31)
MUTED = (134, 134, 139)
LINK = (0, 102, 204)
ACCENT = (220, 38, 38)

# Windows標準のメイリオ(太字も)
FONT_DIR = Path("C:/Windows/Fonts")
FONT_BOLD = FONT_DIR / "meiryob.ttc"
FONT_REG = FONT_DIR / "meiryo.ttc"

img = Image.new("RGB", (W, H), BG)
draw = ImageDraw.Draw(img)

# 左帯: アクセントカラーの細い縦ライン (BRAND #1E3A8A)
draw.rectangle([(0, 0), (10, H)], fill=(30, 58, 138))

# ロゴ配置 (左に大きく)
logo = Image.open(LOGO).convert("RGBA")
target_h = 530  # 上下余白約50px
ratio = target_h / logo.height
new_w = int(logo.width * ratio)
logo = logo.resize((new_w, target_h), Image.LANCZOS)

logo_x = 30
logo_y = (H - target_h) // 2
img.paste(logo, (logo_x, logo_y), logo)

# 右側テキストエリア
text_x = logo_x + new_w + 30
text_right = W - 35

f_title = ImageFont.truetype(str(FONT_BOLD), 30)
f_sub = ImageFont.truetype(str(FONT_REG), 18)
f_small = ImageFont.truetype(str(FONT_REG), 16)
f_eyebrow = ImageFont.truetype(str(FONT_BOLD), 14)

# eyebrow
draw.text((text_x, 110), "KANOU SETSUBI CO., LTD.", font=f_eyebrow, fill=LINK)

# メインタイトル (3行に分割)
draw.text((text_x, 150), "くらしを支える、", font=f_title, fill=INK)
draw.text((text_x, 195), "設備の", font=f_title, fill=INK)
draw.text((text_x, 240), "プロフェッショナル。", font=f_title, fill=INK)

# 仕切り線
draw.rectangle([(text_x, 305), (text_x + 60, 307)], fill=LINK)

# 事業領域 (2行)
draw.text((text_x, 325), "上下水道 ／ 空調", font=f_sub, fill=INK)
draw.text((text_x, 355), "ガス ／ 消防 ／ 衛生", font=f_sub, fill=INK)

# 地域・創業
draw.text((text_x, 410), "埼玉県本庄市の", font=f_small, fill=MUTED)
draw.text((text_x, 435), "総合設備会社", font=f_small, fill=MUTED)
draw.text((text_x, 470), "創業 昭和36年", font=f_small, fill=MUTED)

# 右下にURL
f_url = ImageFont.truetype(str(FONT_REG), 14)
draw.text((text_x, H - 50), "www.kanousetsubi.co.jp", font=f_url, fill=LINK)

img.save(OUT, "PNG", optimize=True)
print(f"saved: {OUT}  ({OUT.stat().st_size // 1024} KB)")
