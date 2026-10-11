#!/usr/bin/env python3
"""Import a design-tool export of the Queen of the Baltic site into this repo.

The design tool exports a flat prototype folder:

    Queen of the Baltic.dc.html, Gallery.dc.html, 404.dc.html
    support.js, image-slot.js, siteContent.v4.js
    _ds/queen-of-the-baltic-design-system-<id>/...
    assets/<brand>.svg, assets/fonts, assets/photos, assets/partners ...

This script copies it into the repo layout (everything published lives in
site/), rewrites the paths the pages use, and re-applies the repo-only
additions: favicon / Open Graph / canonical tags in the static <head>.

Usage:
    python3 tools/import_export.py path/to/export_folder
    python3 tools/import_export.py --rewrite site/index.html ...   # paths only
"""
import argparse
import re
import shutil
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
SITE = REPO / "site"
BASE_URL = "https://sanya-boss.github.io/qotb"

PAGES = {
    "Queen of the Baltic.dc.html": "index.html",
    "Gallery.dc.html": "gallery.html",
    "404.dc.html": "404.html",
}
# Export files that never go into site/
SKIP = {"README.md", "CHANGES.md", "CLAUDE.md", "robots.txt", "sitemap.xml"}  # last two are repo-managed
# Monotype Times New Roman is not licensed for public redistribution;
# the site uses the system font and the bundled Tinos fallback instead.
SKIP_PATTERNS = [re.compile(r"assets/fonts/TimesNewRoman-.*\.ttf$")]


def map_path(rel: str) -> str | None:
    """Export-relative file path -> repo-relative path (None = skip)."""
    if rel in SKIP or any(p.search(rel) for p in SKIP_PATTERNS):
        return None
    if rel in PAGES:
        return f"site/{PAGES[rel]}"
    if rel == "image-slot.js":
        return "tools/design-runtime/image-slot.js"
    if rel in ("support.js", "siteContent.v4.js"):
        return f"site/assets/js/{rel}"
    m = re.match(r"_ds/[^/]+/(.*)$", rel)
    if m:
        inner = m.group(1)
        if inner in ("_adherence.oxlintrc.json", "_ds_manifest.json", "readme.md"):
            return f"design/design-system/{inner}"
        return f"site/assets/design-system/{inner}"
    m = re.match(r"assets/([^/]+\.svg)$", rel)
    if m:
        return f"site/assets/brand/{m.group(1)}"
    return f"site/{rel}"


def rewrite(text: str) -> str:
    """Rewrite the paths pages and scripts reference to the repo layout."""
    text = re.sub(r"_ds/queen-of-the-baltic-design-system-[0-9a-f-]+/", "assets/design-system/", text)
    text = re.sub(r'(src=")\./support\.js"', r'\1assets/js/support.js"', text)
    text = text.replace("'./siteContent.v4.js'", "'./assets/js/siteContent.v4.js'")
    text = text.replace("new URL('siteContent.v4.js'", "new URL('assets/js/siteContent.v4.js'")
    text = re.sub(r"(?<![\w/])assets/([A-Za-z0-9_-]+\.svg)", r"assets/brand/\1", text)
    text = text.replace('href="Gallery.dc.html', 'href="gallery.html')
    text = text.replace('href="Queen of the Baltic.dc.html', 'href="./')
    text = text.replace("https://qotb.eu/assets/photos/webp/footer.webp", f"{BASE_URL}/assets/og/og-image.jpg")
    text = text.replace('"url":"https://qotb.eu/"', f'"url":"{BASE_URL}/"')
    text = text.replace("ogImage: 'assets/photos/webp/footer.webp'", "ogImage: 'assets/og/og-image.jpg'")
    text = re.sub(r",url\('TimesNewRoman-[A-Za-z]+\.ttf'\) format\('truetype'\)", "", text)
    return text


ICONS = """<meta name="theme-color" content="#041E3A">
<link rel="icon" href="favicon.ico" sizes="32x32">
<link rel="icon" href="assets/favicon/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="assets/favicon/apple-touch-icon.png">
<link rel="manifest" href="site.webmanifest">"""

OG_ALT = "Queen of the Baltic International — winners of season 2026 with their crowns"


def social(title: str, desc: str, url: str) -> str:
    img = f"{BASE_URL}/assets/og/og-image.jpg"
    return f"""<link rel="canonical" href="{url}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Queen of the Baltic">
<meta property="og:locale" content="en_US">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{img}">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="{OG_ALT}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{desc}">
<meta name="twitter:image" content="{img}">
<meta name="twitter:image:alt" content="{OG_ALT}">"""


HEAD_EXTRA = {
    "index.html": ICONS + "\n" + social(
        "Queen of the Baltic — International beauty &amp; self-expression contest",
        "Season 2026 is complete. Meet the winners and apply for 2027.",
        f"{BASE_URL}/"),
    "gallery.html": ICONS + "\n" + social(
        "Gallery — Queen of the Baltic",
        "All photoshoots of Queen of the Baltic: finals, September shootings, China Fashion Week, "
        "partner shoots with Elitcar, Hearts Fine Jewelry and Harley-Davidson, and the yacht photoshoot.",
        f"{BASE_URL}/gallery"),
    "404.html": ICONS,
}
# Tags the design tool puts inside the JS-rendered <helmet>; crawlers and
# social networks don't run JS, so they are moved into the static <head>.
HELMET_MOVE = [r"<title>.*?</title>", r'<meta name="description"[^>]*>',
               r'<meta name="robots"[^>]*>', r'<script type="application/ld\+json">.*?</script>']
HELMET_DROP = [r'<link rel="canonical"[^>]*>', r'<meta property="og:[^>]*>',
               r'<meta name="twitter:[^>]*>', r'<meta name="theme-color"[^>]*>']


def fix_head(name: str, s: str) -> str:
    if 'rel="manifest"' in s.split("</head>")[0]:
        return s  # already processed
    hm = re.search(r"<helmet>.*?</helmet>", s, re.S)
    moved = []
    if hm:
        helmet = hm.group(0)
        for pat in HELMET_DROP:
            helmet = re.sub(pat + r"\n?", "", helmet)
        for pat in HELMET_MOVE:
            for m in re.findall(pat, helmet, re.S):
                moved.append(m)
                helmet = helmet.replace(m + "\n", "", 1).replace(m, "", 1)
        s = s.replace(hm.group(0), helmet)
    vp = '<meta name="viewport" content="width=device-width, initial-scale=1">'
    s = s.replace(vp, vp + "\n" + "\n".join(moved + [HEAD_EXTRA[name]]), 1)
    return s.replace("<html>", '<html lang="en">', 1)


def import_export(src: Path) -> None:
    for f in sorted(p for p in src.rglob("*") if p.is_file()):
        rel = f.relative_to(src).as_posix()
        dest = map_path(rel)
        if dest is None:
            print(f"skip  {rel}")
            continue
        out = REPO / dest
        out.parent.mkdir(parents=True, exist_ok=True)
        if rel in PAGES:
            out.write_text(fix_head(PAGES[rel], rewrite(f.read_text(encoding="utf-8"))), encoding="utf-8")
        elif rel == "siteContent.v4.js" or rel.endswith("fonts.css"):
            out.write_text(rewrite(f.read_text(encoding="utf-8")), encoding="utf-8")
        else:
            shutil.copyfile(f, out)
        print(f"{rel} -> {dest}")


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("export", nargs="?", type=Path, help="export folder from the design tool")
    ap.add_argument("--rewrite", nargs="+", type=Path, metavar="FILE", help="only rewrite paths in these files")
    a = ap.parse_args()
    if a.rewrite:
        for p in a.rewrite:
            p.write_text(rewrite(p.read_text(encoding="utf-8")), encoding="utf-8")
        return 0
    if not a.export or not a.export.is_dir():
        ap.error("pass the export folder")
    import_export(a.export)
    return 0


if __name__ == "__main__":
    sys.exit(main())
