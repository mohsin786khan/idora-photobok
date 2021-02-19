const express = require('express');
const router = express.Router();

const addProductApi = require('../../../controller/api/v1/addproduct_api');

router.get('/showProducts', addProductApi.showProducts);
router.get('/showProduct/:id', addProductApi.showProduct);
router.post('/createProduct', addProductApi.createProduct);
router.delete('/deleteProduct/:id', addProductApi.deleteProduct);

module.exports = router;