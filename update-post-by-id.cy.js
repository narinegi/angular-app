describe('Update Post by ID API Test API', () => {
  it('should update post by id', () => {
    cy.api('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('title', 'foo');
    });
  });
});


