#!/bin/bash
rm -rf allure-ui-results/*
npm test
./node_modules/.bin/allure generate allure-ui-results --clean --output allure-ui-report
