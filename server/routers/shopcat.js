/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';
let express = require('express');
let router = express.Router();

router.get('/h5/shopcat/mycart', require('../modules/shopcat'));
router.get('/h5/shopcat/youlike', require('../modules/youlike'));

module.exports = router;
