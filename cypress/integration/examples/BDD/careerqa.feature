Feature: End to end QA apply career validation

    @Regression
    Scenario: validate we have a QA job listed
        Given I open fullfabric careers Page
        Then I validate we have "Senior Quality Assurance Engineer" listed

    Scenario: validate QA job page content
        Given I open fullfabric careers Page
        And I select "Senior Quality Assurance Engineer" job title
        Then I validate job page has a "Senior Quality Assurance Engineer" title
        And I validate job page has a "Apply for this job" button
        And I validate job page structure

    Scenario: validate QA job page down arrow

    Scenario: validate QA job page apply floating button

    Scenario: validate QA job form down arrow

    Scenario: validate QA job form fields
        Given I open QA job form