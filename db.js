const mysql = require('mysql2');

const db = mysql
  .createPool({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'jack',
  })
  .promise();

module.exports = db;
