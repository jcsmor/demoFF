# demoFF

# Requirements 
Have a machine with Node.js installed or Install Node.js locally
Can be runned on CI using a docker machine with Node.js

1 - Download from code repo https://github.com/jcsmor/demoFF.git

2 - Enter code directory and run: npm install

3 - Run tests with: npx cypress run --spec cypress\integration\examples\BDD\careerqa.feature --headed --browser chrome

From command line inside project folder:
# npx cypress run --spec cypress\integration\examples\BDD\careerqa.feature --headed --browser chrome

4 - Alternative - Run the command: npx cypress open
This will open the Cypress Test Runner window, allowing you to execute your tests from a Cypress dashboard.
# npx cypress open

# Notes:

# Feature file with the automated tests can be found here:
cypress\integration\examples\BDD\careerqa.feature

# Test plan for career page using Gherkin Syntax that can be found here:
demoFF\cypress\integration\examples\BDD\testPlanCareer.feature

# testPlanCareer.feature ->
Using Gherkin to demonstrate the level of detail and ways of writting test cases,
this is just a demo that exemplifies a possible test plan on the careers section and is not automated, only testPlanCareer.feature is automated.

# Why using Cypress?
Cypress automation has become increasingly popular in the QA industry due to its unique features and capabilities. Cypress offers a powerful and intuitive testing framework that allows QA engineers to write automated tests quickly and efficiently. It offers a modern approach to testing web applications that integrates seamlessly with modern front-end frameworks such as React, Angular, and Vue. Its test runner offers a visual representation of the test runs, which makes it easy for testers to identify and troubleshoot issues. Cypress also provides built-in debugging tools, which makes it easier to diagnose and fix issues quickly.

# Organize tests with a clear folder structure:
# Write descriptive test names:
# Keep tests short and focused:
# Use custom commands:
# Use fixtures:
# Use the Page Object Model:
# Use beforeEach() and afterEach() hooks:
# Use assertions wisely:
# Use Cypress Dashboard:
# Use continuous integration: