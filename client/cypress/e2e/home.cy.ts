// https://on.cypress.io/api

describe('Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });


  it('visits the dashboard url', () => {
    cy.contains('Bar Chart').should('exist');
    cy.contains('Line Chart').should('exist');
    cy.get('[data-testid="bar-chart"]').should('exist');
  });

  it('test button event', () => {
    cy.contains('Line Chart').click();
    cy.get('[data-testid="line-chart"]').should('exist');
    cy.contains('Bar Chart').click();
    cy.get('[data-testid="bar-chart"]').should('exist');
  });
});
