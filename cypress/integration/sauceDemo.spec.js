// sauceDemo.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Sauce demo', () => {
  beforeEach(() => cy.visit('/'))
  it('successfully logs in', () => {
    cy.login(Cypress.env('standard_user'), Cypress.env('password'))
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').should('have.text', 'Logout')
    cy.get('#logout_sidebar_link').should('be.visible')
    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('errors on locked out user', () => {
    cy.login(Cypress.env('locked_out_user'), Cypress.env('password'))
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test=error]').should('be.visible')
    /* ==== End Cypress Studio ==== */
  })
})
