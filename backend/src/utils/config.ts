import 'dotenv/config';

const DATABASE_URL = process.env.DATABASE_URL;
const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT || 3001;

export { DATABASE_URL, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT };