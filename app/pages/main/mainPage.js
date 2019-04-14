const Base = require('../base')

/**
 * Класс для методов работы с главной страницей.
 */
class MainPage extends Base {

  get homepageLink() {return $('//a[@aria-label="Homepage"]')}
  get loginLink() {return $('//a[@href="/login"]')}

  /**
   * Переход на главную страницу тестового стенда.
   */
  open() {
    this.wdio.open('/')
    this.wdio.wait(this.homepageLink)
  }

  /**
   * Переход на страницу логина.
   */
  gotoLogin() {
    this.wdio.click(this.loginLink)
  }

}
module.exports = new MainPage()
