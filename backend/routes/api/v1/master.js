const express = require('express');
const router = express.Router();

const masterApi = require('../../../controller/api/v1/master_api');

router.post('/create', masterApi.create);
router.get('/show', masterApi.showAll);
router.put('/update/:id', masterApi.update);
router.delete('/delete/:id', masterApi.delete);

module.exports = router;
