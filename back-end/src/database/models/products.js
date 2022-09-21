import { INTEGER, STRING } from 'sequelize';
import db from '.';

Products.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    price: {
      type: INTEGER,
      allowNull: false,
    },
    urlImage: {
      type: STRING,
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

export default Products;
