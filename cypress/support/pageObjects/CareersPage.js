class CareersPage {

    getJobTitles() {
        return cy.get('a.teamtailor-jobs__job-title')
    }

    getAcceptCookie() {
        return cy.get('#hs-eu-confirmation-button')
    }

}

export default CareersPage;
