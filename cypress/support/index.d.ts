/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    login(username: string, password: string): Chainable<void>;
    clearSession(): Chainable<void>;
    visitHomePage(): Chainable<void>;
  }
}
