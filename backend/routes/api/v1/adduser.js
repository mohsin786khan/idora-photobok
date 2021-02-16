const express = require('express');
const router = express.Router();

const adduserApi = require('../../../controller/api/v1/adduser_api');
const { protect } = require('../../../middleware/auth');



router.post('/create',protect, adduserApi.create);
router.put('/edit/:id', protect,adduserApi.edit);
router.delete('/delete/:id',protect, adduserApi.delete);
router.get('/show',protect, adduserApi.showList);


module.exports = router;