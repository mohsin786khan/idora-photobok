const express = require('express');
const router = express.Router();

const addProductApi = require('../../../controller/api/v1/addproduct_api');
const { protect } = require('../../../middleware/auth');


router.get('/showProducts', protect, addProductApi.showProducts);
router.get('/showProduct/:id', protect, addProductApi.showProduct);
router.post('/createProduct', protect, addProductApi.createProduct);
router.delete('/deleteProduct/:id', protect, addProductApi.deleteProduct);

module.exports = router;