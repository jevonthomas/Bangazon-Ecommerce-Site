'use strict';

const { Router } = require('express');
const router = Router();

const { getHomeProducts, getChosenProduct, getProductCategories } = require('../controllers/productsCtrl');

router.get('/home', getHomeProducts);
router.get('/products/:id', getChosenProduct);
router.get('/categories', getProductCategories);

module.exports = router;