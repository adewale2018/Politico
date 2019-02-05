// const chai = require('chai');
// const assert = require('assert');
// const chaiHttp = require('chai-http');
// const dotenv = require('dotenv');
// const app = require('../../../index');
// const { mockData } = require('../__mockData__/mockData');


// dotenv.config();
// chai.should();
// const { expect } = chai;
// chai.use(chaiHttp);



// describe('Politico user controller', () => {
//   const { user} = mockData;

  
//   it('should throw 400 if the type is empty', (done) => {
//     chai.request(app)
//       .post('/api/v1/offices')
//       .set('Content-Type', 'application/json')
//       .send(user.typeError)
//       .end((err, res) => {
//         res.should.have.status(400);
//         assert.equal(false, res.body.success);
//         assert.equal('type field cannot be empty', res.body.error);
//         done();
//       });
//    })
//   it('should return 201 on successful creation of a specific office', (done) => {
//     chai.request(app)
//       .post('/api/v1/offices')
//       .set('Content-Type', 'application/json')
//       .send(user.offices)
//       .end((err, res) => {
//         res.should.have.status(201);
//         assert.equal(user.offices.name, res.body.data[0].name);
//         assert.equal(user.offices.type, res.body.data[0].type);
//         done();
//       });
//   });
//   it('should return 200 on successful get of all political offices', (done) => {
//     chai.request(app)
//       .get('/api/v1/offices')
//       .set('Content-Type', 'application/json')
//       .end((err, res) => {
//         res.should.have.status(200);
//          assert.equal(user.offices.type, res.body.data[0].type);
//          assert.equal(user.offices.name, res.body.data[0].name);
//         done();
//       });
//   });
//   it('should return 200 on successful get of a specific office', (done) => {
//     chai.request(app)
//       .get('/api/v1/office/1')
//       .set('Content-Type', 'application/json')
//       .end((err, res) => {
//         res.should.have.status(200);
//         assert.equal(user.offices.type, res.body.data[0].type);
//         assert.equal(user.offices.name, res.body.data[0].name);
//         done();
//       });
//   });
// });
