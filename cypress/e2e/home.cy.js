describe('home page Labels', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  
  context("heading check",()=>{

    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    it('the h1 contains the correct context',()=>{
      cy.get('h1').should('exist').contains('My Cool MadLibs')
    })

    it("exit Link working",()=>{
      cy.get('a').click()
      //cy.location('pathname').should('eq', 'https://://www.google.com/?gws_rd=ssl')
    })

    it('the h2 contains the correct context',()=>{
      cy.get('h2').contains('Enter Your Choices!')
    })
 })


  
  
  })
  
