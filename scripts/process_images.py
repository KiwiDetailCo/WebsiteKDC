#!/usr/bin/env python3
"""
Resize curated detailing photos for the web and blur any visible number plates.
Plate regions are given as normalized (x0, y0, x1, y1) boxes relative to each
image's dimensions, so they stay correct regardless of source resolution.
"""
import os
from PIL import Image, ImageFilter

SRC = os.path.expanduser("~/Downloads")
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "gallery")
os.makedirs(OUT, exist_ok=True)

MAX_W = 1500          # max output width (px)
QUALITY = 82          # JPEG quality

# (source_relpath, output_name, [plate_boxes])
# plate_boxes are normalized (x0,y0,x1,y1); blurred heavily + pixelated.
JOBS = [
    # ===== BEFORE / AFTER PAIRS — same area, dirty -> clean (no plates) =====
    # Hilux driver footwell — muddy -> clean (same footwell)
    ("car3/Before/IMG_3574.JPG", "hilux-foot-before.jpg", []),
    ("car3/After/IMG_3573.JPG",  "hilux-foot-after.jpg", []),
    # Hilux front door card — grimy -> clean (same door)
    ("car3/Before/IMG_3575.JPG", "hilux-door-before.jpg", []),
    ("car3/After/IMG_3576.JPG",  "hilux-door-after.jpg", []),
    # Outlander rear seats — dirty -> clean (same rear bench)
    ("car2/Before/IMG_3567.JPG", "outlander-rear-before.jpg", []),
    ("car2/After/IMG_3553.JPG",  "outlander-rear-after.jpg", []),
    # Outlander front cabin — dusty -> clean (same driver area)
    ("car2/Before/IMG_3566.JPG", "outlander-cabin-before.jpg", []),
    ("car2/After/IMG_3556.JPG",  "outlander-cabin-after.jpg", []),

    # ===== SHOWCASE — finished results (plates blurred) =====
    ("car4/After/IMG_3546.JPG",  "audi-side-after.jpg", []),
    ("car4/After/IMG_3541.JPG",  "audi-rear-after.jpg",
        [(0.51, 0.54, 0.68, 0.66)]),
    ("car4/After/IMG_3543.JPG",  "audi-wheel-after.jpg", []),
    ("car4/After/IMG_3545.JPG",  "audi-front-after.jpg",
        [(0.42, 0.69, 0.60, 0.81), (0.21, 0.20, 0.32, 0.28)]),
    ("car2/After/IMG_3547.JPG",  "outlander-front-after.jpg",
        [(0.31, 0.56, 0.49, 0.70)]),
    ("car2/After/IMG_3558.JPG",  "outlander-side-after.jpg", []),
    ("car2/After/IMG_3551.JPG",  "outlander-wheel-after.jpg", []),
    ("car1/After/IMG_3530.JPG",  "nissan-side-after.jpg", []),
    ("car1/After/IMG_3526.JPG",  "nissan-interior-after.jpg", []),
]


def blur_plate(img, box):
    w, h = img.size
    x0, y0, x1, y1 = box
    L, T, R, B = int(x0 * w), int(y0 * h), int(x1 * w), int(y1 * h)
    L, T = max(0, L), max(0, T)
    R, B = min(w, R), min(h, B)
    if R <= L or B <= T:
        return
    region = img.crop((L, T, R, B))
    # pixelate (mosaic) then gaussian blur so text is unrecoverable
    small = region.resize((max(1, (R - L) // 22), max(1, (B - T) // 22)),
                          Image.BILINEAR)
    region = small.resize((R - L, B - T), Image.NEAREST)
    region = region.filter(ImageFilter.GaussianBlur(8))
    img.paste(region, (L, T))


def main():
    for rel, name, boxes in JOBS:
        src = os.path.join(SRC, rel)
        if not os.path.exists(src):
            print("MISSING:", src)
            continue
        img = Image.open(src).convert("RGB")
        # respect EXIF orientation
        try:
            from PIL import ImageOps
            img = ImageOps.exif_transpose(img)
        except Exception:
            pass
        for b in boxes:
            blur_plate(img, b)
        if img.width > MAX_W:
            r = MAX_W / img.width
            img = img.resize((MAX_W, int(img.height * r)), Image.LANCZOS)
        out = os.path.join(OUT, name)
        img.save(out, "JPEG", quality=QUALITY, optimize=True)
        print("wrote", name, img.size, "plates:", len(boxes))


if __name__ == "__main__":
    main()
