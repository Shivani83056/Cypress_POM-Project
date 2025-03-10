const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
  // Implement node event listeners if needed
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/PageTest/Test.js",  // Ensures all test files are detected
  },
});
