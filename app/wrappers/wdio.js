const Base = require('./base')

/**
 * Обертка для wdio.
 */
class Wdio extends Base {

  /**
   * Переход по URL.
   * @param {string} url Адрес относительно главной страницы.
   */
  open(url) {
    this.allure.addStep(`Переходим по адресу "${url}"`)
    browser.url(url)
  }

  /**
   * Ожидание появления элемента.
   * @param {WebdriverIO.Element} element Элемент.
   */
  wait(element) {
    this.allure.addStep(`Ожидаем элемент "${element.selector}"`)
    element.waitForDisplayed()
  }

  /**
   * Клик по элементу.
   * @param {WebdriverIO.Element} element Элемент.
   */
  click(element) {
    this.allure.addStep(`Кликаем по элементу "${element.selector}"`)
    element.waitForDisplayed()
    element.click()
  }

  /**
   * Ввод значения в поле.
   * @param {WebdriverIO.Element} element Элемент.
   * @param {string}              value   Значение для ввода.
   */
  setValue(element, value) {
    this.allure.addStep(`Вводим значение "${value}" в поле "${element.selector}"`)
    element.setValue(value)
  }

}
module.exports = new Wdio()
