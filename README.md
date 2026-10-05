# blackantarra
Black Antarra | Cattery of Noble Siamese and Oriental Cats in Estonia.

## Структура

- `Black Antarra Landing v2.dc.html`, `404.dc.html` — выгрузка из редактора дизайна, руками не править
- `index.html` — главная (язык из сохранённого выбора, по умолчанию эстонский)
- `et/`, `en/`, `ru/` — главная с языком по адресу: `/et`, `/en`, `/ru`
- `404.html` — страница ошибки
- `tools/build.py` — собирает `index.html`, `404.html` и `et/ en/ ru/` из выгрузки
- `support.js` — рантайм страниц
- `_ds/` — дизайн-система (шрифты, токены, компоненты)
- `assets/` — логотипы, иконки, иллюстрации, фото
- `uploads/` — исходные материалы

## Обновление сайта

1. Положить новые файлы из выгрузки (`design/`) в корень репозитория.
2. Запустить `python3 tools/build.py` — он добавит правки сайта (без переносов
   в заголовке, без кнопки контакта в hero, анимация кота, язык по адресу)
   и пересоберёт страницы. Если какая-то правка не применилась, скрипт
   напишет WARNING.
3. Закоммитить и влить в `main`.

Сайт статический. Публикация на GitHub Pages идёт автоматически через
`.github/workflows/pages.yml` при каждом пуше в `main`
(Settings → Pages → Source: **GitHub Actions**).
Адрес: https://sanya-boss.github.io/blackantarra/
