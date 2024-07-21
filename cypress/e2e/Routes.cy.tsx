/// <reference types="cypress" />

describe('Routes', () => {
  it('should navigate to Home page', () => {
    cy.visit('/');

    cy.get('[id=home]').should('exist');
  });

  it('should navigate to Article page', () => {
    cy.visit('/article/123');

    cy.get('[id=article-page]').should('exist');
  });

  it('should show Error page for non-existent routes', () => {
    cy.visit('/non-existent-page');

    cy.get('[id=error-page]').should('exist');
  });
});
