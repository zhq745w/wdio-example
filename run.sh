#!/bin/bash

SPEC=$1

rm -rf allure-ui-results/*[!.json]

if [ "$SPEC" = "" ]
then
  npm test
else
  ./node_modules/.bin/wdio --spec "$SPEC"
fi
./node_modules/.bin/allure generate allure-ui-results --clean --output allure-ui-report
