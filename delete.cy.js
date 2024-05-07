describe('Delete Post by ID API Test API', () => {
  it('should delete post by id', () => {
    cy.api('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
      .should((response) => {
        expect(response.status).to.eq(200);
      });
  });
});


