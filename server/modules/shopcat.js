/**
 * Created by fuhuixiang on 16-6-30.
 */
'use strict';

let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = (req, res)=> {
    let myCatList = [];
    for (let i = 0; i < 5; i++) {
        myCatList.push({
            'gid': Mock.mock({"number|1-10000000": 100}).number,
            'sid': Mock.mock({"number|1-1000": 100}).number,
            'title': Mock.mock('@csentence(20)'),
            'description': Mock.mock('@csentence(30)'),
            'period': Mock.mock({"number|1-10000000": 100}).number,
            'icon': Random.image('200x200', '#4A7BF7'),
            'total': Mock.mock({"number|1-1000": 100}).number,
            'purchase': Mock.mock({"number|1-1000": 100}).number,
            "change": 0, //没改变，[1：（普通）剩余数量变更；2：库存不足；4：期数变更；8：商品下架]
            "notice": "商品已过期，自动更新为第2期；", //提醒信息，默认为空字符串""
            "buy": 1000    //用户购买份数
        });
    }
    res.send(myCatList);
    // res.send([]);
};
