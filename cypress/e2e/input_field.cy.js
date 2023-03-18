
describe('home Page Input Fields', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
    const formBody=cy.get('tbody').find('tr')

    it('with correct Input data',()=>{
      formBody.eq(0).contains('Please write an animal:')
      cy.get("input#animal").type("Tiger")
        
      formBody.eq(1).contains('Please write an action:')
      cy.get("input[id='action']").type('jump')

      formBody.eq(2).contains('Please write an object:')
      cy.get("input[id='object']").type('stick')

      formBody.eq(3).contains('Please write a food:')
      cy.get("input[id='food']").type('banana')

     formBody.eq(4).contains('Please write a name:')
      cy.get("input[id='name']").type('Saeed')

     formBody.eq(5).contains('Please write a drink:')
      cy.get("input[id='drink']").type('cola')

     formBody.eq(6).contains('Please write a number:')
      cy.get("input[id='number']").type('12')

     formBody.eq(7).contains('Please write an adjective:')
      cy.get("input[id='adjective']").type('brave')

     formBody.eq(8).contains('Please write a city:')
      cy.get("input[id='city']").type('happy cantt')

     formBody.eq(9).contains('Please write a mood:')
      cy.get("input[id='mood']").type('sad')

      cy.get('button').contains('Complete').click()
      cy.location('pathname').should('eq','/')
       
      cy.get('h2').contains('Results')
        
      cy.get('p').eq(0).contains('Once upon a time in happy cantt, Saeed got out of bed to start their day. To their surprise, sitting at the end of their bed was an enormous Tiger jump the stick.')
      cy.get('p').eq(1).contains('Saeed felt so sad, they knocked over the glass of cola on their bedside table.')
      cy.get('p').eq(2).contains('Suddenly, the Tiger spoke...')
      //cy.get('p').eq(3).contains("'You must answer 23 happy questions, or I will steal your soul... and your banana!'")
 
      
     })

    
})