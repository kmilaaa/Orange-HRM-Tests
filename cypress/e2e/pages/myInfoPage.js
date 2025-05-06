class MyInfoPage {

    selectorsList () {
        const selectors = {
        firstNameField: "[name='firstName']",
        lastNameField: "[name='lastName']",
        genericField: ".oxd-input--active",
        dateField: "[data-v-4a95a2e0=''][data-v-bddebfba='']",
        genericComboBox: ".oxd-select-text-input",
        secondItemComboBox: '.oxd-select-dropdown > :nth-child(3)',
        thirdItemComboBox: '.oxd-select-dropdown > :nth-child(2)',
        dateCloseButton: ".oxd-form > :nth-child(3) > :nth-child(2)",
        submitButton: "[type='submit']",
        
        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)

    } 
    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, licenseExpiryDate){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click() 
}
    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(1).click({ force: true})
        cy.get('.oxd-toast-close')
    }

    fillStatus(){
        cy.get(this.selectorsList().genericComboBox).eq(0).click({force: true})
        cy.get(this.selectorsList().secondItemComboBox).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click({force: true})
        cy.get(this.selectorsList().thirdItemComboBox).click()
    }


    }

export default MyInfoPage