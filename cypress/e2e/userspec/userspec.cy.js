import userData from '../fixtures/user-Data.json'
import LoginPage from '../pages/LoginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'
import UnsuccessFullPage from '../pages/unsuccessfulLoginPage.js'

const Chance = require('chance')
const Chance = new Chance()

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()
const unsuccessfulLoginPage = new UnsuccessFullPage()

describe('Orange HRM Tests', () => {


  it('user Info Update com sucesso', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userLoginComSucesso.username, userData.userLoginComSucesso.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails('camila', 'rodolfo')
    myInfoPage.fillEmployeeDetails('12345', '56789', '9077678', '2025-05-07')
    myInfoPage.saveForm()
    myInfoPage.fillStatus()
    

  })

})