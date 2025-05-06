import userData from '../fixtures/user-Data.json'
import LoginPage from '../pages/LoginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import UnsuccessFullPage from '../pages/unsuccessfulLoginPage.js'

const loginPage = new LoginPage()
const unsuccessfulLoginPage = new UnsuccessFullPage()
const dashboardPage = new DashboardPage()


describe('Login Orange HRM Tests', () => {

it('Login sem sucesso', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userLoginSemSucesso.username,userData.userLoginSemSucesso.password )

})


it('Login com sucesso', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userLoginComSucesso.username,userData.userLoginComSucesso.password)
    dashboardPage.checkDashboardPage()
})

})