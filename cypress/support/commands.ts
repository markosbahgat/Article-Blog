// Import commands.js using ES2015 syntax:
// Import additional support files if needed

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.request({
    method: 'POST',
    url: '/api/login', // Change to your actual login endpoint
    body: {
      username,
      password,
    },
  }).then(resp => {
    window.localStorage.setItem('authToken', resp.body.token);
  });
});

// Example of a custom command to clear cookies and local storage
Cypress.Commands.add('clearSession', () => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

// Custom command to visit the home page
Cypress.Commands.add('visitHomePage', () => {
  cy.visit('/');
});

// Add more custom commands as needed
