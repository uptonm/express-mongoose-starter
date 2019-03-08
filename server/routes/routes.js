const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/health', controller.getHealth);

module.exports = router;
