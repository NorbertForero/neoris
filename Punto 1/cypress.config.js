const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    baseUrl: 'https://www.demoblaze.com/',
    specPattern: 'cypress/e2e/tests/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
