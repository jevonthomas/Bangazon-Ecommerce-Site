'use strict';

const { Router } = require('express');
const router = Router();

const { getProducts } = require('../controllers/productsCtrl');

router.get('/products', getProducts);

module.exports = router;