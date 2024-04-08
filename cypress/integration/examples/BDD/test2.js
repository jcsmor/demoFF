/// <reference types="Cypress" />
// Validate QA page title is Senior Quality Assurance Engineer
// Validate QA page has a apply for this job Btn
// Validate QA page has a Overview
// Validate QA page has Qualifications
// Validate QA page has What We Offer

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open fullfabric careers Page', () => {
    cy.visit(Cypress.env('url') + "/company/careers")
})

Then('I validate we have a QA job listed', function () {

})