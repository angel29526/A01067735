const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'clases_fate',
    password: ''
});

module.exports = pool.promise();