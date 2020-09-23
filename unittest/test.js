var request = require('supertest');
var app = require('../server.js');

describe('GET /', function () {
  it('respond with', function (done) {
    request(app).get('/test').expect('success', done);
  });
});
