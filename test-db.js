const { sql, poolPromise } = require('./db');

(async () => {
    try {
        const pool = await poolPromise;
        console.log("✅ Database connected successfully");
        const result = await pool.request().query("SELECT 1 AS test");
        console.log("Test Query Result:", result.recordset);
    } catch (err) {
        console.error("❌ Connection error:", err.message);
    }
})();
