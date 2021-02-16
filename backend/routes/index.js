const express = require('express');

const router = express.Router();

//const homeController = require('../controller/home_controller');

console.log('router loaded');

//router.get('/', homeController.home);


//router.use('/api', require('./api/v1'));

router.use('/api', require('./api'));

module.exports = router;