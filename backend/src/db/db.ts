import { Sequelize } from "sequelize-typescript";
import { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST } from "../utils/config";
import DailyTimeSeries from "../models/dailyTimeSeries";
import Security from "../models/security";

if (!DB_NAME || !DB_USERNAME || !DB_PASSWORD || !DB_HOST) {
  throw new Error('Database configuration is incomplete');
}

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres'
});

sequelize.addModels([DailyTimeSeries, Security]);


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