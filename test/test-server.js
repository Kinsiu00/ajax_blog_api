const log = require('why-is-node-running');
const chai = require('chai');
const assert = chai.assert;
const chaiHTTP = require('chai-http');
const server = require('../index');

chai.use(chaiHTTP);

describe('blogposts', function() {
  it('should list all blogposts on /blogposts GET', function(done) {
    chai.request(server)
      .get('/api/blogposts')
      .end(function( error, response ) {
        assert.strictEqual(response.status, 200, 'Status code should be 200');
        assert.isArray(response.body, 'Response should be an array');
        log();
        done();
      });
  });
});
