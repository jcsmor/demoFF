class CareersPage {

    getJobTitles() {
        return cy.get('a.teamtailor-jobs__job-title')
    }
}

export default CareersPage;
