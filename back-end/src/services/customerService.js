const models = require("../database/models");

const customerService = {
  async findAll() {
    const result = await models.Product.findAll({ raw: true });
    return result;
  },

  async customer(data) {
    const { products, ...sale } = data;
    const saleId = await models.Sale.create(
      { ...sale, saleDate: new Date() },
      { raw: true }
    );
    await Promise.all(
      products.map((product) =>
        models.SaleProduct.create({
          saleId: saleId.id,
          productId: product.id,
          quantity: product.quantity,
        })
      )
    );
    return saleId;
  },

  async findById(id) {
    const customersById = await models.Sale.findByPk(id);
    return customersById;
  },

  async updateCust(id, data) {
    const customersUpdated = await models.Sale.findByPk(id);
    await customersUpdated.update(data, { where: { id } });
    return customersUpdated;
  },
};

module.exports = customerService;
