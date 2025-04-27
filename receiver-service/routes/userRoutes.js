const express = require('express');
const { createUser } = require('../controller/userController');

const router = express.Router();

router.post('/receiver', createUser);

module.exports = router;
