const data = require('../data').Users
const {Main, Login} = require('../pages')

describe('Проверка формы логина', () => {
  it('Проверка перехода на страницу логина с главной страницы', () => {
    Main.open()
    Main.gotoLogin()
    Login.checkLoaded()
  })
  it('Проверка авторизации с пустыми данными', () => {
    Login.open()
    Login.submitData()
    Login.checkAuthError()
  })
  it('Проверка ввода некорректных логина/пароля', () => {
    Login.open()
    Login.setFields(data.incorrectUser)
    Login.submitData()
    Login.checkAuthError()
  })
})
