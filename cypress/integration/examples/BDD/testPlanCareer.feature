Feature: Test Plan for Careers

    #Test plan for career page using Gherkin Syntax
    Scenario: validate fullfabric top navigation
        Given I open fullfabric careers Page
        When I select fullfabric top navigation
        Then I am redirected to "https://www.fullfabric.com/"

    Scenario: validate Products navigation
        Given I open fullfabric careers Page
        When I mouse over Products
        Then I see new onOver background color
        And I see "Foundation CRM", "Origin", "Core" dropdown menus

    Scenario: validate Resources navigation
        Given I open fullfabric careers Page
        When I mouse over Resources
        Then I see new onOver background color
        And I see "Articles", "Case Studies", "Guides & webinars" dropdown menus

    Scenario: validate Support navigation
        Given I open fullfabric careers Page
        When I mouse over Support
        Then I see new onOver background color
        And I see "Help Centre" dropdown menus

    Scenario: validate Company navigation
        Given I open fullfabric careers Page
        When I mouse over Company
        Then I see new onOver background color
        And I see "About Us", "Security", "Careers" dropdown menus

    Scenario: validate fullfabric positions available button
        Given I open fullfabric careers Page
        When I mouse over Positions available button
        Then I see new background color onOver buttons
        When I select on Positions available button
        Then I validate page focus on positions available

    Scenario: validate fullfabric positions available
        Given I open fullfabric careers Page
        Then I validate all available positions onOver background color changes
        And I validate all available positions open correct page after click

    Scenario: validate Contact us
        Given I open fullfabric careers Page
        When I mouse over Contact us
        Then I see new background color onOver buttons
        When I select Contact us
        Then I validate a mailto pop over appears

    Scenario: validate Schedule a demo
        Given I open fullfabric careers Page
        When I mouse over Schedule a demo
        Then I see new background color onOver
        When I select Schedule a demo
        Then I validate a form appears

    Scenario: validate Schedule a demo form
        Given I open fullfabric careers Page
        When I select Schedule a demo
        Then I see a book a demo form
        When I fill all available fields in the form
        Then I validate i can submit

    Scenario: validate careers page main header
        Given I open fullfabric careers Page
        Then I validate the page main headers
            | Get ready to shape the future of higher education |
            | Positions available                               |
            | Our mission                                       |
            | What we value as a company                        |
            | What we offer                                     |
            | Recruitment process                               |
            | What we value in our work                         |
            | Be part of our team!                              |

    Scenario: validate Join us
        Given I open fullfabric careers Page
        When I select Join us
        Then I validate a mailto pop over appears
        Then I validate page focus on positions available

    Scenario: validate Footer section
        Given I open fullfabric careers Page
        Then I validate the page footer section contains
            | Products  |
            | Resources |
            | Explore   |
            | Company   |
            | Contacts  |
        And I validate all links present in footer open correct resource

