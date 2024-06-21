// Validate we have a QA job listed
/// <reference types="Cypress" />
import CareersPage from '../../../support/pageObjects/CareersPage'
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import JobPage from '../../../support/pageObjects/JobPage';

const careerPage = new CareersPage()
const jobPage = new JobPage()

Given('I open fullfabric careers Page', () => {
    cy.visit(Cypress.env('url') + "/company/careers")
})

Given('I open qa job Page', () => {
    cy.visit(Cypress.env('jobsPage') + "/jobs/3648234-senior-quality-assurance-engineer")
})

Then('I validate we have {string} listed', jobTitle => {
    var IsPresent = false
    careerPage.getJobTitles().each((element) => {
        let text = element.text()
        if (text.valueOf() === jobTitle) {
            IsPresent = true
        }
    }).then(function () {
        expect(IsPresent, 'jobTitle ' + jobTitle + ' is not present').to.be.true
    })
})

Then('I select {string} job offer', jobTitle => {
    careerPage.getAcceptCookie().eq(0).click()

    careerPage.getJobTitles().each((element) => {
        let text = element.text()
        if (text.valueOf() === jobTitle) {
            cy.wrap(element).invoke('removeAttr', 'target').click()
        }
    })
})

When('I validate the qa page main headers are present', function (dataTable) {
    var dh1 = dataTable.rawTable[1].toString()
    var dh2 = dataTable.rawTable[2].toString()
    var dh3 = dataTable.rawTable[3].toString()
    var dh4 = dataTable.rawTable[4].toString()
    var dh5 = dataTable.rawTable[5].toString()

    jobPage.getAcceptCookie().click()

    jobPage.getHeader1().eq(0).should('have.text', dh1);
    jobPage.getCompanyHeader().eq(0).should('have.text', dh2);
    jobPage.getCompanyHeader().eq(1).should('have.text', dh3);
    jobPage.getCompanyHeader().eq(2).should('have.text', dh4);
    jobPage.getCompanyHeader().eq(3).should('have.text', dh5);
})

Then('I select {string} button', applyBtn => {
    jobPage.getAcceptCookie().click()
    jobPage.getApplyJob().click()
})

Then('I validate form overlay is visible', () => {
    jobPage.getFormOverlay().should('be.visible')
})

Then('I fill form with correct values', function () {
    jobPage.getRadioBtn().eq(0).check().should('be.checked').and('have.value', 'true')
    jobPage.getCityBased().type(this.data.formCity)
    jobPage.getFirstName().type(this.data.firstName)
    jobPage.getLastName().type(this.data.lastName)
    jobPage.getEmail().type(this.data.email)
    jobPage.getPhone().type(this.data.phone)
    jobPage.getCoverLetter().type(this.data.coverLetter)
    jobPage.getConsent1().check().should('be.checked')
    jobPage.getConsent2().check().should('be.checked')
})

Then('Submit application button is enabled', () => {
    jobPage.getSubmitApplication().should('be.enabled')
})

