const express = require('express');
const cors = require('cors');
require('dotenv').config();

const employeeRoutes = require('./routes/employees');
const amoRoutes = require('./routes/amo');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/employees', employeeRoutes);
app.use('/amo', amoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
