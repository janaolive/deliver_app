const models = require('../database/models');

const sellerService = {

  async findAll() {
    const orders = await models.Sale.findAll({
      include: [{
        model: models.Product,
        as: 'products',
        through: { attributes: ['quantity'] },
      }],
    });
    return orders;
  },

  async findBySellerId(id) {
    // console.log(id);
    const order = await models.Sale.findOne({ where: { sellerId: id } });
    return order;
  },

};

module.exports = sellerService;