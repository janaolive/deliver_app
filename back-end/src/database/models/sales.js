import { INTEGER, STRING } from 'sequelize';
import db from '.';
import Users from './users';

Sales.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: INTEGER,
      allowNull: false,
    },
    sellerId: {
      type: INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: INTEGER,
      allowNull: false,
    },
    deliveryAddress: {
      type: STRING,
      allowNull: false,
    },
    deliveryNumber: {
      type: STRING,
      allowNull: false,
    },
    saleDate: {
      type: DATE,
      allowNull: false,
    },
    status: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    // ... Outras configs
    underscored: true,
    sequelize: db,
    // modelName: 'example',
    timestamps: false,
  },
);

Users.hasMany(Sales, { foreignKey: 'userId'});
Users.hasMany(Sales, { foreignKey: 'sellerId'});
Sales.belongsTo(Users, { foreignKey: 'userId'});
Sales.belongsTo(Users, { foreignKey: 'sellerId'});

export default Sales;
