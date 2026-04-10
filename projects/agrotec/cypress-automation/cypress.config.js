const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://agroteccr.com", // base del sitio

    setupNodeEvents(on, config) {
      // aquí puedes agregar plugins si los necesitas
    },

    viewportWidth: 1280,
    viewportHeight: 720,

    defaultCommandTimeout: 8000, // tiempo máximo para comandos
    pageLoadTimeout: 60000,     // tiempo de carga de páginas

    video: true,                // graba video de las pruebas
    screenshotOnRunFailure: true // toma screenshot si falla
  },
});