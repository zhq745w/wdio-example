const Base = require('../base')
const formData = require('./loginData')

/**
 * Класс для методов работы со страницой логина.
 */
class LoginPage extends Base {

  get title() {return $('//div[contains(@class, "auth-form-header")]/h1')}
  get usernameField() {return $('//input[@name="login"]')}
  get passwordField() {return $('//input[@name="password"]')}
  get submitButton() {return $('//input[@name="commit"]')}
  get authError() {return $('//form//div[contains(@class, "flash-error")]')}

  /**
   * Переход на главную страницу тестового стенда.
   */
  open() {
    this.wdio.open('/login')
    this.wdio.wait(this.title)
  }

  /**
   * Проверка, что загружена страница логина.
   */
  checkLoaded() {
    this.wdio.wait(this.title)
    this.assert.equal(this.title.getText(), formData.title)
  }

  /**
   * Заполнение данных пользователя для авторизации.
   * @param {object} userData          Данные для авторизации.
   * @param {string} userData.username Логин.
   * @param {string} userData.password Пароль.
   */
  setFields({username, password}) {
    this.wdio.setValue(this.usernameField, username)
    this.wdio.setValue(this.passwordField, password)
  }

  /**
   * Отправка данных формы логина.
   */
  submitData() {
    this.wdio.click(this.submitButton)
  }

  /**
   * Проверка наличия ошибки авторизации.
   */
  checkAuthError() {
    this.wdio.wait(this.authError)
    this.assert.equal(this.authError.getText(), formData.authError)
  }

}
module.exports = new LoginPage()
