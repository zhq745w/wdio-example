const assert = require('chai').assert
const wrappers = require('../wrappers')

/**
 * Базовый класс-родитель для Pages.
 */
class BasePage {

  constructor() {
    this.assert = assert
    this.wdio = wrappers.Wdio
  }

}
module.exports = BasePage
