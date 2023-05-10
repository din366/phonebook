<h1 style="text-align: center;">Простой телефонный справочник, собранный на webpack
</h1>

<p>Простой телефонный справочник, в котором реализованы функции добавления контакта, удаление контакта, а также сохранение и сортировка контактов в local storage</p>

<a href="https://phonebook-ochre.vercel.app" style="text-align: center;">Развернутое приложение на Vercel</a>

## Конфиг Вебпака:
# 4 варианта сборки:
<ul>
  <li>start - сборка development билда с запуском сервера webpack-dev-server + hot reload</li>
  <li>dev - сборка development билда без запуска сервера</li>
  <li>build - сборка production билда</li>
  <li>clear - очистка папки dist</li>
</ul>

# Дополнительные параметры:
<ul>
  <li>Обработка файлов стилей - css, scss, sass</li>
  <li>Обработка изображений - jpg, jpeg, png, gif, svg</li>
  <li>Обработка шрифтов - woff2, woff, eot, ttf, otf</li>
  <li>Обработка html файлов</li>
  <li>Имена файлов при сборке формируются при помощи hash и являются уникальными при обновлении</li>
  <li>Подключен babel + полифил (babel-polyfill)</li>
</ul>

<p>Для работы с приложением:</p>

## Запуск production сборки:
### `npm run build`

- сборка и оптимизация приложения в папке dist для деплоя.

## Запуск dev-сборки с запуском сервера:
### `npm run start`

## Запуск dev-сборки без запуска сервера:
### `npm run build`

## Очистка папки dist:
### `npm run clear`
