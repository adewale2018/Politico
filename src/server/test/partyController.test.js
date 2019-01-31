const chai = require('chai');
const assert = require('assert');
const chaiHttp = require('chai-http');
const dotenv = require('dotenv');
const app = require('../../../index');
const { mockData } = require('../__mockData__/mockData');


dotenv.config();
chai.should();
const { expect } = chai;
chai.use(chaiHttp);



describe('Politico user controller', () => {
  const { user} = mockData;

  it('should throw 400 if the logoUrl is empty', (done) => {
    chai.request(app)
      .post('/api/v1/parties')
      .set('Content-Type', 'application/json')
      .send(user.partiesLogoUrlError)
      .end((err, res) => {
        res.should.have.status(400);
        assert.equal(false, res.body.success);
        assert.equal('logoUrl field cannot be empty', res.body.error);
        done();
      });
  });
  it('should throw 400 if the name is empty', (done) => {
    chai.request(app)
      .post('/api/v1/parties')
      .set('Content-Type', 'application/json')
      .send(user.partiesNameError)
      .end((err, res) => {
        res.should.have.status(400);
        assert.equal(false, res.body.success);
        assert.equal('name field cannot be empty', res.body.error);
        done();
      });
  });
  it('should throw 400 if the hqAddress is empty', (done) => {
    chai.request(app)
      .post('/api/v1/parties')
      .set('Content-Type', 'application/json')
      .send(user.partiesHqAddressError)
      .end((err, res) => {
        res.should.have.status(400);
        assert.equal(false, res.body.success);
        assert.equal('hqAddress field cannot be empty', res.body.error);
        done();
      });
  });
  it('should return 201 on successful creation of parties', (done) => {
    chai.request(app)
      .post('/api/v1/parties')
      .set('Content-Type', 'application/json')
      .send(user.parties)
      .end((err, res) => {
        res.should.have.status(201);
        assert.equal(user.parties.name, res.body.data[0].name);
        assert.equal(user.parties.hqAddress, res.body.data[0].hqAddress);
        assert.equal(user.parties.logoUrl, res.body.data[0].logoUrl);
        
        done();
      });
  });
  it('should return 200 on successful get of all parties', (done) => {
    chai.request(app)
      .get('/api/v1/parties')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res.should.have.status(200);
        assert.equal(user.parties.name, res.body.data[0].name);
        assert.equal(user.parties.hqAddress, res.body.data[0].hqAddress);
        assert.equal(user.parties.logoUrl, res.body.data[0].logoUrl);
        done();
      });
  });
});
