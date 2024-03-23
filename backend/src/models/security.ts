import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/db";

class Security extends Model {}

Security.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ticker: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  securityName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  sector: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  trend: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
  }
}, {
  sequelize,
  timestamps: false,
  modelName: 'Security',
  }
);

export { Security };