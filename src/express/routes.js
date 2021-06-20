var express = require('express');
var router = express.Router();

var AppController = require('./controllers/app.controller');

router.get('/', AppController.index);

module.exports = router;