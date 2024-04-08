// Validate we have a QA job listed
/// <reference types="Cypress" />
import CareersPage from '../../../../support/pageObjects/CareersPage'
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const careerPage = new CareersPage()

Given('I open fullfabric careers Page', () => {
    cy.visit(Cypress.env('url') + "/company/careers")
})

Then('I validate we have {string} listed', jobTitle => {
    var IsPresent = false
    cy.log(jobTitle)
    careerPage.getJobTitles().each((element) => {
        let text = element.text()
        if (text.valueOf() === jobTitle) {
            IsPresent = true
        }
    }).then(function () {
        expect(IsPresent, 'jobTitle ' + jobTitle + ' is not present').to.be.true
        cy.pause()
    })
})

Then(`I see {string} in the title`, title => {
    cy.title().should("include", title);
});