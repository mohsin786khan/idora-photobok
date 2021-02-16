const express = require('express');


 const router = express.Router();

console.log('in v1 index');


router.use('/users', require('./users'));
router.use('/admin', require('./admin'));
router.use('/master', require('./master'));
router.use('/adduser', require('./adduser'));

 module.exports = router;