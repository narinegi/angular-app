describe('Get Post by ID API Test API', () => {
  it('should get post by id', () => {
    cy.api('GET', 'https://jsonplaceholder.typicode.com/posts/1')
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
      });
  });
});
