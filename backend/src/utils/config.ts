import 'dotenv/config';
import * as path from 'path';

const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const SERVER_PORT = Number(process.env.SERVER_PORT) || 4000;

const DB_FILE_PATH = path.join(__dirname, '..', 'db', 'data.json');

export { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, SERVER_PORT, DB_FILE_PATH };