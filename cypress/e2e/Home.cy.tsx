/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should render article cards', () => {
    const articles = [
      {
        title: 'A Wildly Obscene Term’s Path to Mainstream Usage',
        abstract: 'Abstract 1',
        imageUrl: 'url1',
      },
      {
        title: 'What We Know About the Assassination Attempt Against Trump',
        abstract: 'Abstract 2',
        imageUrl: 'url2',
      },
    ];

    articles.forEach(article => {
      cy.get('[id=article-card]')
        .contains('article-h2', article.title)
        .should('exist');
      cy.get('[id=article-card]')
        .contains('article-abstract', article.abstract)
        .should('exist');
      cy.get('[id=article-card]')
        .find(`img[src="${article.imageUrl}"]`)
        .should('exist');
    });
  });
});
