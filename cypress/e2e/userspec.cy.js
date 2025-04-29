import userData from '../fixtures/user-Data.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[data-v-4a95a2e0=''][data-v-bddebfba='']",
    dateCloseButton: ".oxd-form > :nth-child(3) > :nth-child(2)",
    submitButton: "[type='submit']" 
    

  }


  it.only('user Info Update com sucesso', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userLoginComSucesso.username)
    cy.get(selectorsList.passwordField).type(userData.userLoginComSucesso.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get (selectorsList.myInfoButton).click()
    cy.get (selectorsList.firstNameField).clear().type('Camila')
    cy.get (selectorsList.lastNameField).clear().type('Rodolfo')
    cy.get (selectorsList.genericField).eq(3).clear().type('1234')
    cy.get (selectorsList.genericField).eq(4).clear().type('3456')
    cy.get (selectorsList.genericField).eq(5).clear().type('856748')
    cy.get (selectorsList.genericField).eq(6).clear().type('2025-03-10')
    cy.get (selectorsList.dateCloseButton).click()
    cy.get (selectorsList.submitButton).eq(1).click()
    cy.get('.oxd-toast-close')
    
    
  })
  it('Login sem sucesso', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userLoginSemSucesso.username)
    cy.get(selectorsList.passwordField).type(userData.userLoginSemSucesso.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
  })
})