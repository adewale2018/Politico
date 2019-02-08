const chai = require('chai');
const assert = require('assert');
const chaiHttp = require('chai-http');``
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
      .post('/api/v1/auth/signup')
      .set('Content-Type', 'application/json')
      .send(user.signUpPhoneNumberError)
      .end((err, res) => {
        res.should.have.status(400);
        assert.equal(false, res.body.success);
        assert.equal('phoneNumber should be 11 characters', res.body.error);
        done();
      });
  });
  it('should throw 400 if the firstname is empty', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .set('Content-Type', 'application/json')
      .send(user.signUpFirstnameError)
      .end((err, res) => {
        res.should.have.status(400);
        assert.equal(false, res.body.success);
        assert.equal('firstname field cannot be empty', res.body.error);
        done();
      });
  });
  it('should throw 400 if the email is empty', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .set('Content-Type', 'application/json')
      .send(user.signInEmailError)
      .end((err, res) => {
        res.should.have.status(400);
        assert.equal(false, res.body.success);
        assert.equal('Email address field cannot be empty', res.body.error);
        done();
      });
  });
  it('should throw 400 if the password is empty', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .set('Content-Type', 'application/json')
      .send(user.signInPasswordError)
      .end((err, res) => {
        res.should.have.status(400);
        assert.equal(false, res.body.success);
        assert.equal('Password field cannot be empty', res.body.error);
        done();
      });
  });
  it('should throw 400 if the firstname is empty', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .set('Content-Type', 'application/json')
      .send(user.signUpFirstnameError)
      .end((err, res) => {
        res.should.have.status(400);
        assert.equal(false, res.body.success);
        assert.equal('firstname field cannot be empty', res.body.error);
        done();
      });
  });
  it('should throw 400 if the lastname is empty', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .set('Content-Type', 'application/json')
      .send(user.signUpLastnameError)
      .end((err, res) => {
        res.should.have.status(400);
        assert.equal(false, res.body.success);
        assert.equal('lastname field cannot be empty', res.body.error);
        done();
      });
  });
  it('should throw 400 if the othername is empty', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .set('Content-Type', 'application/json')
      .send(user.signUpOthernameError)
      .end((err, res) => {
        res.should.have.status(400);
        assert.equal(false, res.body.success);
        assert.equal('othername field cannot be empty', res.body.error);
        done();
      });
  });
  it('should throw 400 if the passportUrl is empty', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .set('Content-Type', 'application/json')
      .send(user.signUpPassportUrlError)
      .end((err, res) => {
        res.should.have.status(400);
        assert.equal(false, res.body.success);
        assert.equal('passportUrl field cannot be empty', res.body.error);
        done();
      });
  });
  it('should throw 400 if the password is empty', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .set('Content-Type', 'application/json')
      .send(user.signUpPasswordError)
      .end((err, res) => {
        res.should.have.status(400);
        assert.equal(false, res.body.success);
        assert.equal('Password length must be more than 6 characters', res.body.error);
        done();
      });
  });
  it('should return 201 when signup is successfull', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .set('Content-Type', 'application/json')
      .send(user.signUp)
      .end((err, res) => {
         res.should.have.status(201);
        assert.equal(user.signUp.firstName, res.body.data[0].firstname);
        assert.equal(user.signUp.lastName, res.body.data[0].lastname);
        assert.equal(user.signUp.otherName, res.body.data[0].othername);
        assert.equal(user.signUp.phoneNumber, res.body.data[0].phonenumber);
        assert.equal(user.signUp.passportUrl, res.body.data[0].passporturl);
        assert.equal(user.signUp.email, res.body.data[0].email);
        done();
      });
  });
  it('should return 404 when user is not found', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .set('Content-Type', 'application/json')
      .send(user.signInError)
      .end((err, res) => {
        res.should.have.status(404);
        assert.equal(res.body.message, 'Password or Email is incorrect!');
        done();
      });
  });
  it('should return 200 when signin is successfull', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .set('Content-Type', 'application/json')
      .send(user.signIn)
      .end((err, res) => {
        res.should.have.status(200);
        assert.equal(user.signIn.email, res.body.data[0].email);
        assert.equal(res.body.message, 'User signin successfully');
        
        done();
      });
  });
});
