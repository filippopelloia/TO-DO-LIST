describe('todo style', () => {

  it('should render all the elements of the app', () => {
    cy.visit('/')

    cy.get('.title-app').should('be.visible')
      .and('contain', 'TO-DO APP');
    cy.get('.add-btn').should('be.visible')
      .and('contain', 'ADD');
    cy.get('.app').should('be.visible');
    cy.get('.body').should('not.contain', '.add-section');
  })


  it('should write, save and delete one activity', () => {

    cy.visit('/');

    cy.get('.inputSection').type('Ciao questo è un test');
    cy.get('.add-btn').click();
    cy.wait(1000);
    cy.get('.result-section').should('be.visible')
      .and('be.visible')
    
    cy.get('.delete-btn').should('be.visible');

    cy.get('.result').should('be.visible')
      .and('contain', 'Ciao questo è un test');

    cy.get('.delete-btn').click();
    cy.get('.body').should('not.contain', '.result-section');
  })



  it.only('should write and save two activities and delete only one of them', () => {

    cy.visit('/');

    cy.get('.inputSection').should('be.visible');
    cy.get('.add-btn').should('be.visible');

    //MARCO
    cy.get('.inputSection').type('Marco');
    cy.get('.add-btn').click();
    cy.get('.result').should('contain', 'Marco')

    //FILIPPO è RICCO
    cy.get('.inputSection').type('Filippo sono io');
    cy.get('.add-btn').click();
    cy.get('.result').should('contain', 'Filippo sono io')

    //DELETE MARCO
    cy.get(':nth-child(3) > .delete-btn').should('be.visible');
    cy.get(':nth-child(3) > .delete-btn').click();
    cy.get('.result').should('not.have.value', 'Marco');
  })
})