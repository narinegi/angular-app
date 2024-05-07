describe('Get Posts List API Test API', () => {
  it('should get posts list', () => {
    cy.api('GET', 'https://jsonplaceholder.typicode.com/posts')
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.length).to.be.greaterThan(0);
      });
  });
});

