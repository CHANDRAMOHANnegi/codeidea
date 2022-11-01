// import { getGreeting } from '../support/app.po';

// describe('nextjs-pokemon-modes', () => {
//   beforeEach(() => cy.visit('/'));

//   it('should display welcome message', () => {
//     // Custom command example, see `../support/commands.ts` file
//     cy.login('my-email@something.com', 'myPassword');

//     // Function helper example, see `../support/app.po.ts` file
//     getGreeting().contains('Welcome nextjs-pokemon-modes');
//   });
// });

describe('nextjs-pokemon-modes', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.get('input').first().focus().type('bulb');
    cy.get('li').first().should('have.text', 'Bulbasaur');
    cy.get('body').screenshot();
  });
});
