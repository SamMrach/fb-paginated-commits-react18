const { defineConfig } = require('cypress')

module.exports = defineConfig({
  component: {
    devServer(cypressConfig) {
      // component testing dev server setup code
    },
    setupNodeEvents(on, config) {
      // component testing node events setup code
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      // e2e testing node events setup code
    },
  },
})