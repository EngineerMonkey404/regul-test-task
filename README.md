# Регул | Тестовое задание

LIVE-DEMO: https://regul.wex-web.ru/products


## Setup
Для запуска необходим .env файл в корне проекта:
```
JWT_SECRET=<YOUR_SECRET>
```

Можно сгенерировать или взять готовое значение:
e4ecdcee1a4343bd4f45ebd2ef22abe51821bc0a6cf3b2b2beae9d9f1a0af5e9

Установка зависимостей: рекомендуемая версия node: 20 и выше 
```bash
# npm
npm install
```

## Development Server

Дев версия `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Билд:

```bash
# npm
npm run build
```

Превью:
```bash
# npm
npm run preview
```


## Комментарии


### Запросы 
Общие типы хранятся в папке /shared/types.

Примеры запросов: 

```HTTP 
### AUTH
POST /api/auth/login - логин 
GET /api/auth/login - получить данные об авторизации(пользователя)
DELETE /api/auth/logout - деавторизация

### COMPANY
GET /api/company/[id] - Общая информация о компании
GET /api/company/about - данные для раздела "О компании"

### AGENTS
GET /api/agents?companyId=1 - получить данные об агентах

### PRODUCTS
GET /api/products?companyId=1&categoryId=3 - получить данные о товарах и услугах

```

### Доработки 
P.S. Перечислено всё то, что было в голове, но не хватило времени.

В проект можно добавить следующие доработки:
1) Loader-элементы для динамических данных с API.(отслеживать status в useFetch)
2) Элементы-ошибки+обработка ошибок(error и useFetch) на клиентской стороне
3) Обработка ошибок на сервере
4) Отменять неактульные запросы при быстром изменении вкладок(AbortController). Я использовал useFetch, который не имеет signal в options, увы https://github.com/nuxt/nuxt/discussions/24257. Можно использовать useAsyncData + $fetch.
5) Добавить пагинацию для динамических данных(или бесконечный скролл)
6) Автоматические тесты (бэкенд части + e2e тесты)
7) Добавить модальное окно для мобильной версии фильтров у товаров(можно использовать Teleport)
8) Добавить проверку на авторизацию на сервере
9) Оптимизация картинок: .webp, несколько разрешений под разные устройства
