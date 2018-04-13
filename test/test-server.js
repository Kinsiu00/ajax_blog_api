const chai = require('chai');
const assert = chai.assert;
const chaiHTTP = require('chai-http');
const server = require('../index');

chai.use(chaiHTTP);

describe('blogposts', () => {
  it('should list all blogposts on /blogposts GET', done => {
    chai.request(server)
      .get('/api/blogposts')
      .end(( error, response ) => {
        assert.strictEqual(response.status, 200, 'Status code should be 200');
        console.log(response.body);
        assert.isArray(response.body, 'Response should be an array');
        done();
      });
  });
});
