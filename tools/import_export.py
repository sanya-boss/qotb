#!/usr/bin/env python3
"""Import a design handoff of the Queen of the Baltic site into this repo.

The design tool exports a flat prototype folder:

    Main.dc.html, Gallery.dc.html, 404.dc.html
    support.js
    assets/img/*        photos (WebP) and SVG logos
    assets/fonts/*.woff CaneNero + Times New Roman
    README.md           handoff notes

This script copies it into the repo layout (everything published lives in
site/), rewrites links between pages, and re-applies the repo-only
additions: favicon / Open Graph / canonical tags in the static <head>.

Usage:
    python3 tools/import_export.py path/to/design_handoff_folder
    python3 tools/import_export.py --clean path/to/folder   # also delete site/assets/img files the export no longer has
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
    "Main.dc.html": "index.html",
    "Gallery.dc.html": "gallery.html",
    "404.dc.html": "404.html",
}
# Repo-managed or not published
SKIP = {"CHANGES.md", "CLAUDE.md", "robots.txt", "sitemap.xml"}
# Monotype Times New Roman is not licensed for public redistribution: the
# pages use the visitor's system Times New Roman, then Tinos (Google Fonts,
# metric-compatible) where it is missing.
SKIP_PATTERNS = [re.compile(r"^assets/fonts/times_new_roman.*\.woff2?$", re.I),
                 re.compile(r"^assets/fonts/TimesNewRoman.*", re.I)]


def map_path(rel: str) -> str | None:
    """Export-relative file path -> repo-relative path (None = skip)."""
    if rel in SKIP or any(p.search(rel) for p in SKIP_PATTERNS):
        return None
    if rel == "README.md":
        return "docs/design-handoff.md"
    if rel in PAGES:
        return f"site/{PAGES[rel]}"
    if rel == "support.js":
        return "site/assets/js/support.js"
    return f"site/{rel}"


TNR_FACES = {
    "times_new_roman.woff": "local('Times New Roman'),local('TimesNewRomanPSMT')",
    "times_new_roman_ital.woff": "local('Times New Roman Italic'),local('TimesNewRomanPS-ItalicMT')",
}
TINOS_CSS = "https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&amp;display=swap"


def rewrite(text: str) -> str:
    """Rewrite page links, script path and fonts for the repo layout."""
    text = re.sub(r'(src=")\./support\.js"', r'\1assets/js/support.js"', text)
    text = text.replace("Main.dc.html", "./").replace("Gallery.dc.html", "gallery.html")
    text = text.replace('href="./"#', 'href="./#')
    # Times New Roman: system font only (see SKIP_PATTERNS), Tinos fallback
    for f, local in TNR_FACES.items():
        text = re.sub(rf"src:url\('assets/fonts/{re.escape(f)}'\) format\('woff'\)", f"src:{local}", text)
    text = text.replace("'TNR',serif", "'TNR','Tinos',serif")
    if "'TNR'" in text and "family=Tinos" not in text:
        text = text.replace("<helmet>", f'<helmet>\n<link href="{TINOS_CSS}" rel="stylesheet">', 1)
    return text


ICONS = """<meta name="theme-color" content="#041e3a">
<link rel="icon" href="favicon.ico" sizes="32x32">
<link rel="icon" href="assets/favicon/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="assets/favicon/apple-touch-icon.png">
<link rel="manifest" href="site.webmanifest">"""

OG_ALT = "Queen of the Baltic International — season 2026 queens with their crowns"


def social(title: str, desc: str, url: str) -> str:
    img = f"{BASE_URL}/assets/og/og-image.jpg"
    return f"""<meta name="description" content="{desc}">
<link rel="canonical" href="{url}">
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
        "Queen of the Baltic — International Beauty and Self-Expression Contest",
        "An international beauty and self-expression contest from Tallinn — in the name of charity. "
        "About the contest, its founder, partners and how to take part.",
        f"{BASE_URL}/"),
    "gallery.html": ICONS + "\n" + social(
        "Gallery — Queen of the Baltic",
        "All photoshoots of Queen of the Baltic: finals, September shootings, China Fashion Week, "
        "partner shoots with Elitcar, Hearts and Harley-Davidson, and the yacht photoshoot.",
        f"{BASE_URL}/gallery"),
    "404.html": ICONS,
}
# Tags the design tool puts inside the JS-rendered <helmet>; crawlers and
# social networks don't run JS, so they are moved into the static <head>.
HELMET_MOVE = [r"<title>.*?</title>", r'<meta name="robots"[^>]*>',
               r'<script type="application/ld\+json">.*?</script>']
HELMET_DROP = [r'<meta name="viewport"[^>]*>', r'<meta name="description"[^>]*>',
               r'<link rel="canonical"[^>]*>', r'<meta property="og:[^>]*>',
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


def import_export(src: Path, clean: bool) -> None:
    seen = set()
    for f in sorted(p for p in src.rglob("*") if p.is_file()):
        rel = f.relative_to(src).as_posix()
        dest = map_path(rel)
        if dest is None:
            print(f"skip  {rel}")
            continue
        seen.add(dest)
        out = REPO / dest
        out.parent.mkdir(parents=True, exist_ok=True)
        if rel in PAGES:
            out.write_text(fix_head(PAGES[rel], rewrite(f.read_text(encoding="utf-8"))), encoding="utf-8")
        else:
            shutil.copyfile(f, out)
        print(f"{rel} -> {dest}")
    if clean:
        for p in sorted((SITE / "assets" / "img").rglob("*")):
            rel = p.relative_to(REPO).as_posix()
            if p.is_file() and rel not in seen:
                p.unlink()
                print(f"removed {rel}")


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("export", type=Path, help="handoff folder from the design tool")
    ap.add_argument("--clean", action="store_true", help="delete images in site/assets/img that the export no longer has")
    a = ap.parse_args()
    if not a.export.is_dir():
        ap.error("pass the export folder")
    import_export(a.export, a.clean)
    return 0


if __name__ == "__main__":
    sys.exit(main())
