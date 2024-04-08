# demoFF

To Run tests

Requirements: Have a machine with Node.js installed or Install Node.js locally

1 - Download from code repo https://github.com/jcsmor/demoFF.git

2 - Enter code directory and run: npm install

3 - Run tests with: npx cypress run --spec cypress\integration\examples\BDD\careerqa.feature --headed --browser chrome

4 - Alternative - Run the command: npx cypress open
This will open the Cypress Test Runner window, allowing you to execute your tests.


# Notes:

# Feature file with the automated tests can be found here:
cypress\integration\examples\BDD\careerqa.feature

# Test plan for career page using Gherkin Syntax that can be found here:
demoFF\cypress\integration\examples\BDD\testPlanCareer.feature