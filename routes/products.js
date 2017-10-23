'use strict';

const { Router } = require('express');
const router = Router();

const { getHomeProducts, getChosenProduct } = require('../controllers/productsCtrl');

router.get('/home', getHomeProducts);
router.get('/products/:id', getChosenProduct);

module.exports = router;