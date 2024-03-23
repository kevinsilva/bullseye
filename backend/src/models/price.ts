import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/db";

class Price extends Model {}

Price.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  close: {
    type: DataTypes.DECIMAL(10, 4),
    allowNull: false,
  },
  volume: {
    type: DataTypes.BIGINT,
    allowNull: false,
  }
}, {
  sequelize,
  timestamps: false,
  modelName: 'Price',
  }
);

export { Price };