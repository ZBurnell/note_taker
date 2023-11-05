const express = require('express');
const uuid = require('uuid');
const router = express.Router();

let data = require('../db/db.json');

router.get('/', (req, res) => res.json(data));

module.exports = router;