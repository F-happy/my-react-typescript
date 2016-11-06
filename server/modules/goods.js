/**
 * Created by fuhuixiang on 16-6-30.
 */
'use strict';

let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = (req, res)=>{
    let type = req.query.type || 0;
    let goodList = [];
    for (let i= 0;i<10;i++){
        goodList.push({
            'gid': Mock.mock({"number|1-10000000": 100}).number,
            'sid': Mock.mock({"number|1-1000": 100}).number,
            'title': Mock.mock('@csentence(20)'),
            'description': Mock.mock('@csentence(30)'),
            'period': Mock.mock({"number|1-10000000": 100}).number,
            'icon': Random.image('200x200', '#4A7BF7'),
            'total': Mock.mock({"number|1-1000": 100}).number,
            'remain': Mock.mock({"number|1-1000": 100}).number
        });
    }
    res.send({
        'good_lists': goodList
    });
};
