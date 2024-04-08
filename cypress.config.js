const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  reporter: 'mochawesome',
  env: {
    url: "https://www.fullfabric.com",
  },
  retries: {
    runMode: 1,

  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples/BDD/*.js"
  },
});
