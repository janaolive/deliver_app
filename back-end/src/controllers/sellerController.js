const sellerService = require('../services/sellerService');

const sellerController = {
  async findAll(_req, res) {
    const orders = await sellerService.findAll();
    return res.status(200).json(orders);
  },

  async findById(req, res) {
    const { id } = req.params;
    const order = await sellerService.findById(id);
    return res.status(200).json(order);
  },
};

module.exports = sellerController;