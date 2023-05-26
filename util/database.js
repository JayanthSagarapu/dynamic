const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "express-node",
  password: "Pj@8106228817",
});

module.exports = pool.promise();
