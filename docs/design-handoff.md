# Handoff: Queen of the Baltic — сайт (Main, Gallery, 404)

## Overview
Responsive-переделка сайта qotb.eu (ранее Tilda) — три страницы: главная, галерея, 404. Конкурс красоты и самовыражения «Queen of the Baltic International 2026», Таллинн.

## About the design files
Файлы `*.dc.html` — **дизайн-референсы**, сделанные в HTML (прототип с живым поведением), а не production-код. Они открываются в браузере напрямую (нужен `support.js` рядом и локальный сервер, напр. `npx serve .`).
Задача — **воссоздать их в целевом стеке репозитория** (Next.js / Astro / Vite+React / чистый HTML+CSS — что принято в проекте). Если стека ещё нет — рекомендуется **Astro или Next.js (static export)** + CSS-модули/Tailwind; сайт по сути статический с модалками.
Внутри каждого `.dc.html`: разметка с inline-стилями (`{{ hole }}` — значения из класса `Component.renderVals()` в `<script data-dc-script>`), `sc-for` = цикл, `sc-if` = условный рендер, `style-hover` = :hover.

## Fidelity
**High-fidelity.** Цвета, типографика, отступы (`clamp()`-значения), тексты и картинки — финальные. Воспроизводить пиксель-в-пиксель, сохраняя fluid-поведение.

## Design tokens
- Navy (primary / фоны тёмных секций): `#041e3a`
- Navy hover: `#1d3d66`
- Light bg: `#e6e6e6`
- Text: `#1a1a1a`; muted: `#3d4f66`; link hover: `#3b5998`
- Overlay модалок: `rgba(4,30,58,.8)`; затемнение hero-видео: `rgba(4,30,58,.78)` (desktop) / `.72` (mobile)
- Шрифты:
  - **CaneNero** — заголовки, UPPERCASE. `assets/fonts/CaneNero.woff`. ⚠ В шрифте нет цифр — цифры набирать Times New Roman.
  - **Times New Roman (TNR)** regular/italic — акцентный курсив, кнопки. `assets/fonts/times_new_roman.woff`, `assets/fonts/times_new_roman_ital.woff`. ⚠ Кириллицу не содержит — для «на русском» использовать системный Times New Roman.
  - **Poppins** 300/400/500 (Google Fonts) — основной текст.
- Кнопки-«пилюли»: `border-radius:40px`, высота ~46–60px, текст TNR italic.
- Брейкпоинты (JS в прототипе, в проде — CSS media queries): `< 640px` — мобильная раскладка hero/about/charity; `< 960px` — бургер-меню вместо навигации.

## Screens

### Main (`Main.dc.html`)
1. **Hero** (`#home`). Фон — YouTube `efHaU4oqXzk` (autoplay, muted, loop, cover), poster `img_4558.png`, navy overlay. Desktop: nav по центру сверху (Home/About/Gallery/Partners/Contacts), логотип `qobi_full_white.svg` (clamp 260–820px), кнопки «Apply now!» (outline) и «Buy a ticket» (белая) — **сейчас временно отключены** (opacity .45, pointer-events:none, title «Coming soon»), подзаголовок, «SCROLL ↓» по центру внизу, «на русском →» справа (ссылка `https://www.qotb.eu/ru`). Mobile (<640): видео на весь экран до бегущей строки (`min-height: calc(100svh - 48px)`), бургер в круге справа сверху — **position:fixed**, остаётся на экране при скролле всей страницы (z-index 45, navy .75 + blur); **логотип при скролле «прилипает» к верху и плавно опускается до кнопок** (см. `onHeroScroll`: translateY = scrolled до 60% пути, далее экспоненциальное замедление до точки на 16px выше кнопок).
2. **Marquee** — «She’s not just a queen — she’s a force. ⁄», TNR, navy на `#e6e6e6`, движется **слева направо** (animation reverse), 40s цикл. На мобиле стоит сразу под hero (перед About), на десктопе — после About.
3. **About** (`#about`) — navy фон. Desktop: всё по центру (H2 CaneNero, курсивный лид, 2 абзаца, ссылка «Take a look at a Gallery! →» без подчёркивания). Mobile: выравнивание влево, другой лид, абзацы скрыты за кнопкой «More details / Less details», ссылка на галерею слева.
4. **Charity** — абсолютная раскладка на артборде (desktop 1200×690, mobile 320×570), масштаб через `--u` и `container-type:inline-size`. 10 ч/б фото вокруг центрального текста (корона, «In the name of Charity.», H2 «True beauty lives at the heart of our contest», logotype_blue). Координаты — массив `CH` в JS ([src, [x,y,w] desktop, [x,y,w] mobile]). Параллакс: фото смещаются по мыши ×20px, текст ×5px, плюс по скроллу (`--sy`).
5. **Founder** — круглое фото `noroot.png`, имя, роль, 4 соц-кнопки (mail, tel, Instagram, Spotify), 3 абзаца, «Founder’s Manifesto».
6. **Partners** (`#partners`) — H2 + текст; 4 главных партнёра (Decus, Hearts, Elitcar, Medavita; Decus и Medavita на всю ширину); сетка 20 логотипов с границами (`auto-fill, minmax(max(22%,min(200px,45%)),1fr)`). Кнопка «Become a Partner» **временно скрыта** (закомментирована).
7. **Contacts** (`#contacts`) — +372 5592 1134, contest@qotb.eu, соцсети (IG, FB, LinkedIn).
8. **Footer** — navy, logo `qobi_alt_white.svg`, nav. «Become a Partner» **временно скрыта**.
- **Модалки:** «Join» (инфо для участниц → кнопка «Submit a form!»), анкета участницы (Name, Email, Phone, country, Instagram, About, фото), форма партнёра (контакты, Company, тип интереса radio, текст). Hash `#apply` / `#partner` открывает соответствующую модалку. Мобильное меню — полноэкранный оверлей.
- ⚠ **Формы не отправляются** — показывают «Thank you». Нужно подключить бэкенд/сервис (Formspree, собственный API и т.п.).

### Gallery (`Gallery.dc.html`)
Navy hero: «← BACK TO MAIN PAGE», логотип, корона, H1 «Discover the Vision Behind the Project», кнопка «(40+) All Photoshoots» (модалка со ссылками на внешние галереи фотографов), полоса из 5 ч/б превью (hover → цвет + scale). Сетка 6 альбомов (`auto-fill minmax(320px,1fr)`, обложка 4:5, заголовок, описание, «See more»). Клик → полноэкранный альбом (masonry через CSS columns) → лайтбокс с ←/→, Esc, счётчиком. Данные альбомов — `ALBUMS` в JS.

### 404 (`404.dc.html`)
Navy, корона, «404» (Times New Roman), текст, кнопка «Go back», футер с навигацией.

## Interactions
- Smooth scroll по якорям; блокировка скролла body при открытой модалке/меню.
- Hover: кнопки-пилюли заливаются, ссылки → `#3b5998` / opacity .7.
- Esc закрывает модалки галереи; стрелки листают лайтбокс.

## Assets
`assets/img/` — 104 файла: все фото пережаты в WebP (q85, max 2000px по длинной стороне, альфа сохранена), SVG — как есть. Логотипы партнёров перекрашены в `#1a1a1a`, у hikari/liisa убран чёрный фон. `assets/fonts/` — woff-шрифты. Ничего не грузится с серверов Tilda (кроме YouTube-видео). Рекомендуется переименовать файлы в читаемые имена при переносе.

## Files
- `Main.dc.html`, `Gallery.dc.html`, `404.dc.html` — референсы
- `support.js` — рантайм прототипа (только для просмотра, в прод не нужен)
- `assets/img/`, `assets/fonts/` — ассеты

## Не реализовано / TODO
- Отправка форм; реальная ссылка Facebook (сейчас `facebook.com`); RU-версия (ссылка ведёт на qotb.eu/ru); Privacy Policy; SEO-мета/OG; favicon.
