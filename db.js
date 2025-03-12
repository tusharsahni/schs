const sql = require('mssql');
require('dotenv').config();

const config = {
    server: "localhost",  // Use "localhost\\SQLEXPRESS" if using SQL Express
    database: "chssdb",
    user: "sa",  // Replace with your SQL Server username
    password: "Chss@123",  // Replace with your new password
    options: {
        encrypt: false,  
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
