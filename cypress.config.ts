import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.latlong.net/",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
