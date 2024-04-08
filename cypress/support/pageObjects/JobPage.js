class JobPage {

    getHeader1() {
        return cy.get('h1 span')
    }

    getCompanyHeader() {
        return cy.get('.company-links h1')
    }

    getAcceptCookie() {
        return cy.get("button[data-action='click->common--cookies--alert#acceptAll']")
    }

    getApplyJob() {
        return cy.get('.careersite-button--secondary')
    }

    getFormOverlay() {
        return cy.get('.formOverlayAnimationPlaying')
    }

    getRadioBtn() {
        return cy.get('.choice-input-wrapper__input')
    }

    getCityBased() {
        return cy.get('*[name="candidate[answers_attributes][1][text]"]')
    }

    getFirstName() {
        return cy.get('*[name="candidate[first_name]"]')
    }

    getLastName() {
        return cy.get('*[name="candidate[last_name]"]')
    }

    getEmail() {
        return cy.get('*[name="candidate[email]"]')
    }

    getPhone() {
        return cy.get('*[name="candidate[phone]"]')
    }

    getCoverLetter() {
        return cy.get('#candidate_job_applications_attributes_0_cover_letter')
    }

    getConsent1() {
        return cy.get('#candidate_consent_given')
    }

    getConsent2() {
        return cy.get('#candidate_consent_given_future_jobs')
    }

    getSubmitApplication() {
        return cy.get('*[value="Submit application"]')
    }
}

export default JobPage;
