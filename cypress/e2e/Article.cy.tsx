/// <reference types="cypress" />

describe('Article Component', () => {
  beforeEach(() => {
    // Setup initial state if necessary or mock the API
    cy.intercept('GET', '/article', {fixture: 'article.json'}).as('getArticle');
    cy.visit('/article/100000009582127'); // Adjust the URL as per your routing setup
  });

  it('should render article section, title, and abstract', () => {
    cy.wait('@getArticle');

    cy.get('p.text-base.font-semibold.text-indigo-600').should(
      'contain.text',
      'Technology',
    ); // Example section
    cy.get(
      'h1.text-3xl.font-bold.tracking-tight.text-[color:var(--background)]',
    ).should('contain.text', 'The Future of Tech'); // Example title
    cy.get('p.text-xl.leading-8.text-[color:var(--text-subtitle)]').should(
      'contain.text',
      'An in-depth look at emerging technologies...',
    ); // Example abstract
  });

  it('should display the article image', () => {
    cy.wait('@getArticle');

    cy.get('img')
      .should('have.attr', 'src')
      .and('include', 'http://example.com/image.jpg'); // Adjust URL as per your mock data
  });

  it('should render keywords as list items', () => {
    cy.wait('@getArticle');

    const keywords = ['Tech', 'Innovation', 'AI']; // Example keywords

    keywords.forEach(keyword => {
      cy.get('ul.flex.flex-col.items-start')
        .contains('li', keyword)
        .should('have.text', keyword);
    });
  });

  it('should render the feature list with icons', () => {
    cy.wait('@getArticle');

    cy.get('ul.mt-8.space-y-8.text-gray-600 li')
      .eq(0)
      .should('contain.text', 'Push to deploy.')
      .find('svg')
      .should('have.class', 'h-5')
      .should('have.class', 'w-5');

    cy.get('ul.mt-8.space-y-8.text-gray-600 li')
      .eq(1)
      .should('contain.text', 'SSL certificates.')
      .find('svg')
      .should('have.class', 'h-5')
      .should('have.class', 'w-5');

    cy.get('ul.mt-8.space-y-8.text-gray-600 li')
      .eq(2)
      .should('contain.text', 'Database backups.')
      .find('svg')
      .should('have.class', 'h-5')
      .should('have.class', 'w-5');
  });

  it('should render the byline', () => {
    cy.wait('@getArticle');

    cy.get(
      'h2.text-xl.font-bold.tracking-tight.text-[color:var(--background)]',
    ).should('contain.text', 'John Doe'); // Example byline
  });
});
