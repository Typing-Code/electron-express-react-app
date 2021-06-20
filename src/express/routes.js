const express = require('express');
const router = express.Router();
const AppController = require('./controllers/app.controller');

router.get('/', AppController.index);

module.exports = router;