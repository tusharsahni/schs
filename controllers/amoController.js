const { sql, poolPromise } = require('../db');

const addAMO = async (req, res) => {
    try {
        const { name, specialization, hospitalID, contactNumber, email, address, status } = req.body;
        const pool = await poolPromise;

        await pool.request()
            .input('Name', sql.VarChar, name)
            .input('Specialization', sql.VarChar, specialization)
            .input('HospitalID', sql.Int, hospitalID)
            .input('ContactNumber', sql.VarChar, contactNumber)
            .input('Email', sql.VarChar, email)
            .input('Address', sql.VarChar, address)
            .input('Status', sql.Bit, status)
            .query(`
                INSERT INTO AMO (Name, Specialization, HospitalID, ContactNumber, Email, Address, Status)
                VALUES (@Name, @Specialization, @HospitalID, @ContactNumber, @Email, @Address, @Status)
            `);

        res.status(201).json({ message: "AMO added successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { addAMO };
