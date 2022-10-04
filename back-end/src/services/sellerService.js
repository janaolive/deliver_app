const models = require('../database/models');

const sellerService = {
  async findAll() {
    const orders = await models.Sale.findAll({ raw: true });
    return orders;
  },

  async findById(id) {
    // console.log(id);
    const order = await models.Sale.findOne({ where: { id } });
    return order;
  },

};

module.exports = sellerService;