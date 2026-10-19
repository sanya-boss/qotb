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
    ├── img/              фото (WebP) и логотипы (SVG) из дизайна
    ├── fonts/            CaneNero
    ├── js/support.js     рантайм страниц
    ├── favicon/          иконки вкладки и для телефонов
    └── og/               картинка для превью в соцсетях

docs/design-handoff.md    описание дизайна: токены, экраны, поведение, TODO
tools/import_export.py    импорт новой выгрузки из дизайн-тула
.github/workflows/        автопубликация на GitHub Pages
```

## Публикация

Каждый мерж в `main` публикует папку `site/` на GitHub Pages примерно за минуту.

## Как залить новую выгрузку из дизайн-тула

Распакуйте архив и запустите:

```
python3 tools/import_export.py путь/к/design_handoff_папке
```

Скрипт:
- раскладывает файлы: `Main.dc.html` → `site/index.html`, `Gallery.dc.html` → `site/gallery.html`, `404.dc.html` → `site/404.html`, `support.js` → `site/assets/js/`, `assets/` → `site/assets/`, `README.md` → `docs/design-handoff.md`;
- переписывает ссылки между страницами;
- добавляет в `<head>` favicon, описание, теги для соцсетей и canonical;
- не трогает `robots.txt` и `sitemap.xml`;
- пропускает файлы шрифта Times New Roman: лицензия Monotype не разрешает их публиковать. Страницы берут Times New Roman из системы, а где его нет (Android) — похожий Tinos с Google Fonts.

С флагом `--clean` скрипт ещё и удаляет из `site/assets/img` картинки, которых нет в новой выгрузке.

Затем проверьте сайт локально: `cd site && python3 -m http.server`, откройте http://localhost:8000.

## Что ещё не готово

- Отправка форм (анкета участницы, форма партнёра) — сейчас показывают «Thank you», но никуда не отправляют.
- Кнопки «Apply now!» и «Buy a ticket» временно отключены, «Become a Partner» скрыта.
- Реальная ссылка на Facebook, русская версия (ссылка ведёт на qotb.eu/ru), Privacy Policy.
