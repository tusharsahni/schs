const { sql, poolPromise } = require('../db');

const getEmployees = async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query("SELECT * FROM Employees");
        res.json(result.recordset);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const addEmployee = async (req, res) => {
    try {
        const { name, designation, department, joiningDate, contactNumber, amoID } = req.body;
        const pool = await poolPromise;
        await pool.request()
            .input('Name', sql.VarChar, name)
            .input('Designation', sql.VarChar, designation)
            .input('Department', sql.VarChar, department)
            .input('JoiningDate', sql.Date, joiningDate)
            .input('ContactNumber', sql.VarChar, contactNumber)
            .input('AMOID', sql.Int, amoID || null)
            .query("INSERT INTO Employees (Name, Designation, Department, JoiningDate, ContactNumber, AMOID) VALUES (@Name, @Designation, @Department, @JoiningDate, @ContactNumber, @AMOID)");

        res.status(201).json({ message: "Employee added successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getEmployees, addEmployee };
