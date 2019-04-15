const allure = require('@wdio/allure-reporter').default

/**
 * Базовый класс-родитель для Wrappers.
 */
class Base {

  constructor() {
    this.allure = allure
  }

}
module.exports = Base
