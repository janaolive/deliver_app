const { Router } = require('express');
const customerController = require('../controllers/customerController');

const customerRouter = Router();

customerRouter.get('/products', customerController.findAll);
customerRouter.post('/checkout', customerController.addCustomer);
customerRouter.put('/orders/:id', customerController.upDateCustomer);
customerRouter.get('/orders/:id', customerController.getByIdcustomer);

module.exports = customerRouter;
