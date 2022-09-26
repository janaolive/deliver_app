const { Router } = require('express');
const customerProductsController = require('../controllers/customerProductsController');

const customerProductsRouter = Router();

customerProductsRouter.get('/', customerProductsController.findAll);

module.exports = customerProductsRouter;