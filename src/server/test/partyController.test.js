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
        assert.equal(user.parties.hqAddress, res.body.data[0].hqaddress);
        assert.equal(user.parties.logoUrl, res.body.data[0].logourl);
        
        done();
      });
  });
  it('should return 200 on successful get of all parties', (done) => {
    chai.request(app)
      .get('/api/v1/parties')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res.should.have.status(200);
        assert.equal(res.body.message, 'Get parties successfully');
        done();
      });
   });
  it('should return 200 on successful get of a specific party', (done) => {
    chai.request(app)
      .get('/api/v1/party/1')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res.should.have.status(200);
        assert.equal(res.body.message, 'Fetch a specific party successfully');
        done();
      });
  });
  it('should return 404 if the party is not found', (done) => {
    chai.request(app)
      .get('/api/v1/party/5000000')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res.should.have.status(404);
        assert.equal(res.body.message, 'Party not found');
        done();
      });
  });
//   it('should return 200 on successful update of a specific political party', (done) => {
//     chai.request(app)
//       .patch('/api/v1/parties/1/name')
//       .set('Content-Type', 'application/json')
//       .send(user.editParties)
//       .end((err, res) => {
//         res.should.have.status(200);
//         assert.equal(user.editParties.name, res.body.data[0].name);
//         done();
//       });
//   });
//   it('should return 200 on successful delete of a specific political party', (done) => {
//     chai.request(app)
//       .delete('/api/v1/parties/1')
//       .set('Content-Type', 'application/json')
//       .send(user.deleteParties)
//       .end((err, res) => {
//         res.should.have.status(200);
//         assert.equal('Party deleted successfully', res.body.data[0].message);
//         done();
//       });
//   });
});
