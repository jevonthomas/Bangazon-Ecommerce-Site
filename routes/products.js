'use strict';

const { Router } = require('express');
const router = Router();

const { getHomeProducts } = require('../controllers/productsCtrl');

router.get('/home', getHomeProducts);

module.exports = router;