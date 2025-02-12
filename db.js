const sql = require('mssql');
require('dotenv').config();

const config = {
    user: process.env.DB_USER, // Windows Authentication (if applicable)
    password: process.env.DB_PASS, // SQL Authentication password
    server: process.env.DB_SERVER, // "localhost\\SQLEXPRESS" for default instance
    database: process.env.DB_NAME,
    options: {
        encrypt: false, // Set to true if using Azure
        trustServerCertificate: true
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log("✅ Connected to SQL Server");
        return pool;
    })
    .catch(err => console.error("❌ Database Connection Failed: ", err));

module.exports = { sql, poolPromise };
