const express = require('express');
const router = express.Router();

const cmsApi = require('../../../controller/api/v1/cms_api');


router.post('/create', cmsApi.create);
router.get('/show', cmsApi.showall);
router.put('/update/:id', cmsApi.update);
router.delete('/delete/:id', cmsApi.delete); 

module.exports = router;