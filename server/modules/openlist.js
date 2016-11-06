/**
 * Created by fuhuixiang on 16-6-30.
 */
'use strict';

let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = (req, res)=>{
    let returnArray = [];

    returnArray.push({
        'type': 1,
        'icon': Random.image('200x200', '#4A7BF7'),
        'title': Mock.mock('@csentence(20)'),
        'total': Mock.mock({"number|1-1000": 100}).number,
        'time': Date.now()+360000
    });

    returnArray.push({
        'type': 2,
        'icon': Random.image('200x200', '#4A7BF7'),
        'title': Mock.mock('@csentence(20)'),
        'total': Mock.mock({"number|1-1000": 100}).number,
        'msg': '福彩故障,距离开奖还有2小时'
    });

    returnArray.push({
        'type': 3,
        'icon': Random.image('200x200', '#4A7BF7'),
        'total': Mock.mock({"number|1-1000": 100}).number,
        'remain': Mock.mock({"number|1-1000": 100}).number,
        'luck_code': Mock.mock({"number|1-10000000": 100}).number,
        'user_name': Mock.mock('@csentence(10)'),
        'time': Random.datetime('yyyy-MM-dd HH:mm'),
        'user_icon': Random.image('100x100', '#894FC4')
    });


    res.send({
        'new_lists': returnArray
    });
};
