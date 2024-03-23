import { Sequelize } from "sequelize-typescript";
import { DATABASE_URL } from "../utils/config";


if (!DATABASE_URL) throw new Error('DATABASE_URL is not defined');

const sequelize = new Sequelize(DATABASE_URL);

const connectToDatabase = async(): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    return process.exit(1);
  }
};

export { sequelize, connectToDatabase };