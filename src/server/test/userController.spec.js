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


/**
 * @test for userController
 */
describe('Politico user controller', () => {
  const { user } = mockData;

  it('should get home message', (done) => {
    chai.request(app)
      .get('/')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res.should.have.status(200);
        assert.equal('Politico home', res.body.home);
        done();
      });
  });
  it('should throw 400 if the phoneNumber is not up to 11 digits', (done) => {
    chai.request(app)
      .post('/api/v1/signup')
      .set('Content-Type', 'application/json')
      .send(user.signUpPhoneNumberError)
      .end((err, res) => {
        res.should.have.status(400);
        assert.equal(false, res.body.success);
        done();
      });
  });
  it('should throw 400 if the firstname is empty', (done) => {
    chai.request(app)
      .post('/api/v1/signup')
      .set('Content-Type', 'application/json')
      .send(user.signUpFirstnameError)
      .end((err, res) => {
        res.should.have.status(400);
        assert.equal(false, res.body.success);
        done();
      });
  });
  it('should throw 400 if the lastname is empty', (done) => {
    chai.request(app)
      .post('/api/v1/signup')
      .set('Content-Type', 'application/json')
      .send(user.signUpLastnameError)
      .end((err, res) => {
        res.should.have.status(400);
        assert.equal(false, res.body.success);
        done();
      });
  });
  it('should throw 400 if the othername is empty', (done) => {
    chai.request(app)
      .post('/api/v1/signup')
      .set('Content-Type', 'application/json')
      .send(user.signUpOthernameError)
      .end((err, res) => {
        res.should.have.status(400);
        assert.equal(false, res.body.success);
        done();
      });
  });
  it('should throw 400 if the passportUrl is empty', (done) => {
    chai.request(app)
      .post('/api/v1/signup')
      .set('Content-Type', 'application/json')
      .send(user.signUpPassportUrlError)
      .end((err, res) => {
        res.should.have.status(400);
        assert.equal(false, res.body.success);
        done();
      });
  });
  it('should throw 400 if the password is empty', (done) => {
    chai.request(app)
      .post('/api/v1/signup')
      .set('Content-Type', 'application/json')
      .send(user.signUpPasswordError)
      .end((err, res) => {
        res.should.have.status(400);
        assert.equal(false, res.body.success);
        done();
      });
  });
  it('should return 201 when signup is successfull', (done) => {
    chai.request(app)
      .post('/api/v1/signup')
      .set('Content-Type', 'application/json')
      .send(user.signUp)
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });

});
