/// <reference types="Cypress" />
// Validate we have a QA job listed

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open fullfabric careers Page', () => {
    cy.visit(Cypress.env('url') + "/company/careers")
})

Then('I validate we have a QA job listed', function () {

})