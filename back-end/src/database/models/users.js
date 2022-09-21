import db from '.';
import { INTEGER, STRING } from 'sequelize';

Users.init(
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
    email: {
      type: STRING,
      allowNull: false,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
    role: {
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

export default Users;
