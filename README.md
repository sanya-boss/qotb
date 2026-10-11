# Queen of the Baltic — сайт

Сайт конкурса Queen of the Baltic International: https://sanya-boss.github.io/qotb/

## Структура

```
site/                     ← всё, что публикуется на сайт
├── index.html            главная
├── gallery.html          галерея
├── 404.html              страница «не найдено»
├── favicon.ico, site.webmanifest, robots.txt, sitemap.xml
└── assets/
    ├── brand/            логотипы, корона, монограмма (SVG)
    ├── design-system/    токены, стили, бандл и шрифт Cane Nero
    ├── favicon/          иконки вкладки и для телефонов
    ├── fonts/            Tilda Sans, Tinos
    ├── js/               support.js (рантайм страниц), siteContent.v4.js (тексты и данные)
    ├── og/               картинка для превью в соцсетях
    ├── partners/logos/   логотипы партнёров
    └── photos/
        ├── webp/         фото главной, победительниц, основателя
        └── gallery/      56 фото галереи

design/                   исходники, которые на сайт не попадают
├── brand/                логотипы в других цветах и форматах
└── design-system/        служебные файлы дизайн-системы

docs/design-handoff.md    описание дизайна из дизайн-тула
tools/import_export.py    импорт новой выгрузки из дизайн-тула
tools/design-runtime/     рантайм редактора (сайтом не используется)
.github/workflows/        автопубликация на GitHub Pages
```

## Публикация

Каждый мерж в `main` публикует папку `site/` на GitHub Pages примерно за минуту.

## Как залить новую выгрузку из дизайн-тула

Распакуйте архив и запустите:

```
python3 tools/import_export.py путь/к/export_папке
```

Скрипт:
- раскладывает файлы по папкам выше (`Queen of the Baltic.dc.html` → `site/index.html`, `Gallery.dc.html` → `site/gallery.html`, `_ds/…` → `site/assets/design-system/`, логотипы → `site/assets/brand/`);
- переписывает пути и ссылки между страницами;
- добавляет в `<head>` favicon, теги для соцсетей и canonical;
- не трогает `robots.txt` и `sitemap.xml`, пропускает `CHANGES.md`, `CLAUDE.md` и файлы Times New Roman (лицензия Monotype не разрешает их публиковать — сайт берёт шрифт из системы, запасной — Tinos).

Затем проверьте сайт локально: `cd site && python3 -m http.server`, откройте http://localhost:8000.

## Что ещё не готово

- Победительница 2-й категории: имя и фото (сейчас заглушка «Jane Doe»).
- Новое видео для первого экрана.
- Адреса для отправки форм (`siteContent.forms`) и включение кнопки «Apply for 2027».
