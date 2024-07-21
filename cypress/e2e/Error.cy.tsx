/// <reference types="cypress" />

describe('Error Page', () => {
  it('should render error message', () => {
    cy.visit('/non-existent-page'); // Trigger the Error component by visiting a non-existent route

    cy.get('.error-page h1').should('contain.text', 'Error');
    cy.get('.error-page p').should(
      'contain.text',
      'Something went wrong. Please try again later.',
    );
  });
});
