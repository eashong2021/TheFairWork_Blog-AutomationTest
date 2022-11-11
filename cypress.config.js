const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://freelance-blog.amalitech-dev.net/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
