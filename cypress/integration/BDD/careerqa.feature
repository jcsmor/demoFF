Feature: End to end QA apply career validation

    @Regression
    Scenario: validate career page job offer
        Given I open fullfabric careers Page
        Then I validate we have "Escalation Manager" listed


    # Scenario: validate QA job page content
    #     Given I open qa job Page
    #     Then I validate the qa page main headers are present
    #         | header                            |
    #         | Senior Quality Assurance Engineer |
    #         | Overview                          |
    #         | Key Responsibilities              |
    #         | Qualifications                    |
    #         | What We Offer                     |

    # Scenario: validate QA job form fields
    #     Given I open qa job Page
    #     When I select "Apply for this job" button
    #     Then I validate form overlay is visible
    #     When I fill form with correct values
    #     Then Submit application button is enabled

#                           Bonus section                          #

#1 - We can validate the API request is made after user presses Submit applications and confirm response values ex: status code 200.
#2 - With access to the DB we can call the DB and confirm the last submitted values.

#3 - Bellow there are also other tests suggestions for this page

#     Scenario: validate QA job page down arrow
#     Scenario: validate QA job page top navigation
#     Scenario: validate QA job page top social navigation
#     Scenario: validate QA job page chat
#     Scenario: validate QA job page apply floating button
#     Scenario: validate QA job form down arrow