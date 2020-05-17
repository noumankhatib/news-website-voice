const request = require('supertest');
 
let app = require('../router')

//var expect  = require("chai").expect;
var config = require("../config.json")
describe("Catagory add", function() {

  describe("Get all result all for catagory", function() {

    var url = `${config.serverIp}/api/v1/articles/catagory/getAll`;
    console.log("url"+url)
    it('respond with json containing a list of all users', function (done) {
      request(app)
          .get(url)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
  });
})
})