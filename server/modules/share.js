/**
 * Created by fuhuixiang on 16-6-30.
 */
'use strict';

let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = (req, res)=>{
    let shareList = [];
    for (let i = 0; i < 10; i++) {
        shareList.push({
            'user_icon': Random.image('100x100', '#4A7BF7'),
            'luck_code': Mock.mock({"number|1-10000000": 100}).number,
            'sid': Mock.mock({"number|1-10000": 100}).number,
            'user_name': Mock.mock('@csentence(20)'),
            'description': Mock.mock('@csentence(30)'),
            'join_num': Mock.mock({"number|1-1000": 100}).number,
            'icon': [Random.image('200x200', '#4A7BF7'), Random.image('200x200', '#4A7BF7'), Random.image('200x200', '#4A7BF7')],
            'luck_num': Mock.mock({"number|1-1000": 100}).number,
            'time': Random.datetime()
        });
    }
    res.send({
        'share_lists': shareList
    });
};
