import {defineConfig} from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 20000,
  },
  defaultCommandTimeout: 20000,
});
