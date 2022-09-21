import { INTEGER, STRING } from 'sequelize';
import db from '.';

SalesProducts.init(
  {
    saleId: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    productId: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    quantity: {
      type: INTEGER,
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    // modelName: 'example',
    timestamps: false,
  },
);

Sales.hasMany(SalesProducts, { foreignKey: 'saleId'});
Products.hasMany(SalesProducts, { foreignKey: 'productId'});
SalesProducts.belongsTo(Sales, { foreignKey: 'saleId'});
SalesProducts.belongsTo(Products, { foreignKey: 'productId'});

export default SalesProducts;
