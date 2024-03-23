import { Sequelize } from "sequelize-typescript";
import { DATABASE_URL, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT } from "../utils/config";

const sequelize = new Sequelize({
  database: DATABASE_URL,
  dialect: 'postgres',
  username: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: Number(DB_PORT),
  models: [__dirname + '/../models'],
});

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