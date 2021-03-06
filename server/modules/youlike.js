/**
 * Created by fuhuixiang on 16-6-30.
 */
'use strict';

let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = (req, res)=>{
    let youLike = [];
    for (let i = 0; i < 5; i++) {
        youLike.push({
            'gid': Mock.mock({"number|1-10000000": 100}).number,
            'sid': Mock.mock({"number|1-1000": 100}).number,
            'title': Mock.mock('@csentence(20)'),
            'icon': Random.image('200x200', '#4A7BF7'),
            'total': Mock.mock({"number|1-1000": 100}).number,
        });
    }
    res.send(youLike);
};
