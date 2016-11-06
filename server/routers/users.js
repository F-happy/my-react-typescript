/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';
let express = require('express');
let router = express.Router();

router.get('/h5/users/records/list', require('../modules/users/records_lists'));

module.exports = router;
