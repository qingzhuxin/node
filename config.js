const mysql = require("mysql");
const config = {
    MYSQL: {
        database: 'nodetes',
        username: 'root',
        password: '123456',
        host: 'localhost',
        port: 3306
    },
}
const pool = mysql.createPool({
    host: config.MYSQL.host,
    port: config.MYSQL.port,
    user: config.MYSQL.username,
    password: config.MYSQL.password,
    database: config.MYSQL.database
})
module.exports = pool;