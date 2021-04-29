const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '35.223.254.123',
    user: 'root',
    database: 'clases_fate',
    password: ''
});

module.exports = pool.promise();