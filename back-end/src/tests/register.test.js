const sinon = require('sinon');
const chai = require ('chai');
const { User } = require ('../database/models'); 
const chaiHttp = require('chai-http')
const app = require ('../api/app');

chai.use(chaiHttp);

const { expect } = chai;

const register = {
  mock: {
    "id": 4,
    "name": "Janaina Oliveira",
    "email": "janaina@email.com",
    "password": "2339194f1cf92df591291faa06203889",
    "role": "customer",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20ifSwiaWF0IjoxNjYxOTA3NzAzfQ.1NuT4HqDMOa5y1FCiShTlp8PCI2DwVtq7BOxoHkdy0g",
  },
  json: {
    "name": "Janaina Oliveira",
    "email": "janaina@email.com",
    "password": "Janaina123*",
    "role": "customer",
  } 
}

describe('Register', () => {

  beforeEach(async () => {
    sinon.restore();
  });

  it('test route: /register', async () => {
    sinon.stub(User, "create").resolves(register.mock);
      const response = await chai.request(app).post('/register').send(register.json);
      expect(response.status).to.equal(201);  
  });
});
