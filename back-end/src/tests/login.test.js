const sinon = require('sinon');
const chai = require ('chai');
const app = require ('../api/app');

const chaiHttp = require('chai-http');

const loginService = require ('../services/loginService');

// const { User } = require ('../database/models/users');
// const ValidationError = require ('../middleWares/ValidateError');

chai.use(chaiHttp);

const { expect } = chai;

const utilsUser = {
  body: {
    "email": "adm@deliveryapp.com",
    "password": "--adm2@21!!--",
  },

  bodyError: {
    "email": "admin@appcrash.com",
    "password": "admin1234@1234512345",
  }
}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20ifSwiaWF0IjoxNjYxOTA3NzAzfQ.1NuT4HqDMOa5y1FCiShTlp8PCI2DwVtq7BOxoHkdy0g";

describe('Login', () => {

  beforeEach(async () => {
    sinon.restore();
  });

  it('test route: /users', async () => {
    const response = await chai.request(app)
      .post('/login')
      .send(utilsUser.body);
    expect(response.status).to.equal(200);  
  });

  it('should return token', async () => {
    sinon.stub(loginService, "login")
      .resolves({ token })

    const chaiHttpResponse = await chai.request(app)
      .post('/login')
      .send(token)

    expect(chaiHttpResponse.body.token).to.equal(token);
  });

  it('test route error: /users', async () => {
    const response = await chai.request(app)
      .post('/login')
      .send(utilsUser.bodyError);
    expect(response.body).to.have.property('message', 'Incorrect email or password')
    expect(response.status).to.equal(404);  
  });

});
