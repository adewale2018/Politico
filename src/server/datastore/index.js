import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const NODE_ENV = process.env.NODE_ENV;


let connectionString;
if(NODE_ENV ==='test') {
  connectionString = process.env.DB_HOST_TEST;
} else {
  connectionString = process.env.DATABASE_URL;
  console.log(connectionString);
}

const db = new Pool({ connectionString: connectionString });


module.exports = db;
