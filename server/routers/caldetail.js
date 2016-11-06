/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';
let express = require('express');
let router = express.Router();

router.get('/h5/caldetail/info', require('../modules/caldetail'));

module.exports = router;
