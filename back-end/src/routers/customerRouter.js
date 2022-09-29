const { Router } = require('express');
const customerController = require('../controllers/customerController');

const customerRouter = Router();

customerRouter.post('/checkout', customerController.addCustomer);
customerRouter.put('/orders/:id', customerController.upDateCustomer);
customerRouter.get('/orders/:id', customerController.getByIdcustomer);


module.exports = customerRouter;
