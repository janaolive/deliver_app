const sinon = require('sinon');
const chai = require ('chai');
const { Sale } = require ('../database/models');
const app = require ('../api/app');
const chaiHttp = require('chai-http')

chai.use(chaiHttp);

const { expect } = chai;

const utilsSale = {
  body: {
    userId: 1,
    sellerId: 1,
    totalPrice: 10.00,
    deliveryAddress: "Rua Trybe",
    deliveryNumber: "19",
    status: "Pending",
    products: [
      {
        productId: 4,
        quantity: 3
      }
    ]
  },
  
  bodyError: {
    userId: 1,
    sellerId: 1,
    totalPrice: 10.00,
    deliveryAddress: "Rua Trybe",
    deliveryNumber: "19",
    status: "Pending",
    products: [
      {
        productId: 999,
        quantity: 3
      }
    ]
  },  

  mock: {
    "saleDate": {
      "fn": "NOW",
      "args":[]
    },
    "id": 1,
    "userId": 1,
    "sellerId": 1,
    "totalPrice": 10.00,
    "deliveryAddress": "Rua Trybe",
    "deliveryNumber": "19",
    "status": "Pending",
  },

  token: { authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20ifSwiaWF0IjoxNjYxOTA3NzAzfQ.1NuT4HqDMOa5y1FCiShTlp8PCI2DwVtq7BOxoHkdy0g" },

  }

describe('Sale', () => {
  it('test route: /sales', async () => {
    const response = await chai.request(app).post('/sales').set(utilsSale.token).send(utilsSale.body);
    expect(response.status).to.equal(201);  
  });

  it('test route error: /sales', async () => {
    const response = await chai.request(app).post('/sales').set(utilsSale.token).send(utilsSale.bodyError);
    expect(response.body).to.have.property('message', 'product(s) not found')
    expect(response.status).to.equal(404);  
  });
});
