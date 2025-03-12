const express = require('express');
const { addAMO } = require('../controllers/amoController');
const router = express.Router();

router.post('/', addAMO);

module.exports = router;
