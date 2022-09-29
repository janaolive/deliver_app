const sinon = require('sinon');
const chai = require ('chai');
const app = require ('../api/app');
const chaiHttp = require('chai-http')

chai.use(chaiHttp);

const { expect } = chai;

const utilsUser = {
  body: {
    "email": "admin@app.com",
    "password": "admin1234@",
  },
  bodyError: {
    "email": "admin@appcrash.com",
    "password": "admin1234@1234512345",
  }
}

describe('User', () => {
  it('test route: /users', async () => {
    const response = await chai.request(app).post('/login').send(utilsUser.body);
    expect(response.status).to.equal(200);  
  });

  it('test route error: /users', async () => {
    const response = await chai.request(app).post('/login').send(utilsUser.bodyError);
    expect(response.body).to.have.property('message', 'User not found')
    expect(response.status).to.equal(404);  
  });
});
