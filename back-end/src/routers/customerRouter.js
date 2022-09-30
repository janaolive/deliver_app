const { Router } = require('express');
const customerController = require('../controllers/customerController');

const customerRouter = Router();

customerRouter.get('/products', customerController.findAll);
customerRouter.post('/orders', customerController.addCustomer);

customerRouter.put('/orders/:id', customerController.updateCustomer);
customerRouter.get('/orders/:id', customerController.getByIdCustomer);

module.exports = customerRouter;
