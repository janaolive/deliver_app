const db = require('../database/models');

const customerProductsService = {
  async findAll() {
    const result = await db.Product.findAll({ raw: true });
    console.log(result);
    return result;
  },
};

module.exports = customerProductsService;