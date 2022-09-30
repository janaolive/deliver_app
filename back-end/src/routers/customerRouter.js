const { Router } = require('express');
const customerController = require('../controllers/customerController');

const customerRouter = Router();
const orders = '/orders/:id';

customerRouter.get('/products', customerController.findAll);
customerRouter.post(orders, customerController.addCustomer);

customerRouter.put(orders, customerController.updateCustomer);
customerRouter.get(orders, customerController.getByIdCustomer);

module.exports = customerRouter;
