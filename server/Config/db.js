// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'farmtrust_db',
  password: 'NewStudent360@',
  port: 5432,
});

module.exports = pool;
