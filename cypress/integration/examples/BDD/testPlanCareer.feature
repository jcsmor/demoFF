Feature: Test Plan for Careers

    #Top navigation
    Scenario: validate fullfabric top navigation
        Given I open fullfabric careers Page
        When I select fullfabric top navigation
        Then I am redirected to "https://www.fullfabric.com/"

    Scenario: validate Products navigation
        Given I open fullfabric careers Page
        When I mouse over Products
        Then I see "Foundation CRM", "Origin", "Core" dropdown menus

    Scenario: validate Resources navigation
        Given I open fullfabric careers Page
        When I mouse over Resources
        Then I see "Articles", "Case Studies", "Guides & webinars" dropdown menus

    Scenario: validate Support navigation
        Given I open fullfabric careers Page
        When I mouse over Support
        Then I see "Help Centre" dropdown menus

    Scenario: validate Company navigation
        Given I open fullfabric careers Page
        When I mouse over Company
        Then I see "About Us", "Security", "Careers" dropdown menus

    Scenario: validate fullfabric positions available
        Given I open fullfabric careers Page
        When I select on Positions available button
        Then I validate page focus on positions available

    Scenario: validate fullfabric positions available
        Given I open fullfabric careers Page
        When I select on Positions available button
        Then I validate page focus on positions available

