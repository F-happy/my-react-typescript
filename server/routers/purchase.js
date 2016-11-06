/**
 * Created by fuhuixiang on 16/7/26.
 */
'use strict';
let express = require('express');
let router = express.Router();

router.get('/h5/purchase/record', require('../modules/purchase'));

module.exports = router;
