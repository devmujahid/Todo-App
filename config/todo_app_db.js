const mysql = require('mysql');
var pool = mysql.createPool({
    port : process.env.DB_PORT,
    host: process.env.DB_HOST,
    users: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit: 10
});

module.exports = pool;