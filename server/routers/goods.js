/**
 * Created by fuhuixiang on 16-6-30.
 */
'use strict';
let express = require('express');
let router = express.Router();

router.get('/h5/goods', require('../modules/goods'));
router.get('/h5/goods/detail', require('../modules/detail'));
router.get('/h5/goods/info', require('../modules/goods_info'));

module.exports = router;
