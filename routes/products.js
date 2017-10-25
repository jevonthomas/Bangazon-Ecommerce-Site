'use strict';

const { Router } = require('express');
const router = Router();

const { getHomeProducts, getChosenProduct, getProductCategories, getProductCategory } = require('../controllers/productsCtrl');

router.get('/home', getHomeProducts);
router.get('/products/:id', getChosenProduct);
router.get('/categories', getProductCategories);
router.get('/categories/:id', getProductCategory);

module.exports = router;