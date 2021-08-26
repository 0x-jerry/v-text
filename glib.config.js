const { defineConfig } = require('@exyz/glib')

module.exports = defineConfig({
  release: {
    steps: {
      publish: true,
    },
  },
})
