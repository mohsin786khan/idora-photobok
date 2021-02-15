const express = require('express');
const router = express.Router();

const adminApi = require('../../../controller/api/v1/admin_api');

router.post('/signin', adminApi.signin);

module.exports = router;
