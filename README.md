# wdio-example

Репозиторий с автотестами на примере сайта https://github.com/

## Зависимости

* NodeJS: версия 10.15.3+
* Браузер Chrome

## Разворачивание
1. Склонировать репозиторий (ветка master)
2. Выполнить `npm install` в консоли в корневой директории репозитория

## Запуск тестов
- запуск всех UI-тестов `./runUi.sh`
- запуск отдельной спеки UI-тестов: `./runUi.sh app/specs/ui/<spec_name>.js`

## Отчет
- генерируется автоматически после выполнения `./runUi.sh`
- расположение отчета: `./allure-ui-report` в корне репозитория
