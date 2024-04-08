const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  //tasks switch executing piece of code from browser to Node, execute code in Node
  await preprocessor.addCucumberPreprocessorPlugin(on, config)
  on("file:preprocessor", browserify.default(config));
  // Make sure to return the config object as it might have been modified by the plugin
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  reporter: 'mochawesome',
  env: {
    url: "https://www.fullfabric.com",
    jobsPage: "https://fullfabricspoonsixlimited.teamtailor.com",
    jobTitleQA: "Senior Quality Assurance Engineer",
  },
  retries: {
    runMode: 1,

  },
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/integration/examples/BDD/*.feature"
  },
});
