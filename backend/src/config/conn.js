require("dotenv").config();
const sql = require("mysql2");

let con = sql.createPool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  connectionLimit: 10,
  queueLimit: 0,
  waitForConnections: true
});

module.exports = con.promise();