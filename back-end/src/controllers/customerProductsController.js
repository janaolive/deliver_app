const customerProductsService = require('../services/customerProductsService');

const customerProductsController = {
  async findAll(_req, res) {
    const products = await customerProductsService.findAll();
    return res.status(200).json(products);
  },   
};

module.exports = customerProductsController;