import { Sequelize } from "sequelize-typescript";
import { DATABASE_URL } from "../utils/config";
import Price from "../models/price";
import Security from "../models/security";

if (!DATABASE_URL) throw new Error('DATABASE_URL is not defined');

const sequelize = new Sequelize(DATABASE_URL);

sequelize.addModels([Price, Security]);


const connectToDatabase = async(): Promise<void> => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    return process.exit(1);
  }
};

export { sequelize, connectToDatabase };