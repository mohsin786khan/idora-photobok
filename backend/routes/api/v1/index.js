const express = require('express');
const router = express.Router();


router.use('/users', require('./users'));
router.use('/admin', require('./admin'));
router.use('/master', require('./master'));
router.use('/adduser', require('./adduser'));
router.use('/addProduct', require('./addProduct'));

module.exports = router;
