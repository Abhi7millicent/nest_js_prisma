import * as dotenv from 'dotenv';
import * as path from 'path';

const ENV = process.env.NODE_ENV || 'development';
const envFilePath = path.resolve(__dirname, `${ENV}.env`);
dotenv.config({ path: envFilePath });

console.log('Loaded environment variables from', envFilePath);
