// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// You can import additional support files here if needed
// import './another-support-file'

// Example of setting a default base URL
Cypress.config('baseUrl', 'http://localhost:3000');

// Example of setting a default viewport size
Cypress.config('viewportWidth', 1280);
Cypress.config('viewportHeight', 720);

// You can use before or beforeEach hooks for setup tasks
before(() => {
  // runs once before all tests
  cy.log('Starting test suite');
});

beforeEach(() => {
  // runs before each test
  cy.clearSession(); // Custom command to clear session before each test
});

afterEach(() => {
  // runs after each test
  cy.log('Test completed');
});
