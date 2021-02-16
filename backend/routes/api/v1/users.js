const express = require('express');

const router = express.Router();
 
const userApi = require('../../../controller/api/v1/user_api');

 console.log('in user_api');

router.post('/signin', userApi.signin);
router.post('/signup', userApi.signup);


 module.exports = router;