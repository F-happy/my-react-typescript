/**
 * Created by fuhuixiang on 16-6-30.
 */
'use strict';

let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = (req, res)=>{
    let records = [];
    for (let i = 0; i < 5; i++) {
        records.push({
            "create_time": Random.datetime(), //充值时间
            "dis_count": 100, //充值折扣,
            "exorderno": "test_exorderno", //充值流水号
            "id": Mock.mock({"number|1-10000": 100}).number,   //充值记录id
            "is_only_charge": 1, //该订单是否只是充值 0:不是， 1:是 注:在购买商品入口付款的充值记录为0,而充值入口进入的为1
            "pay_type_id": 1, //付款方式id
            "pay_type_name": "支付宝",//付款方式名称
            "points": 0, //充值消耗的积分数， 注：用积分兑换时，该值为相应的消耗积分， 其他不消耗积分的充值方式，改值为0
            "price": 1, //付款金额
            "status": 3, //充值状态 3:充值成功， 2:确认中, 1:未付款， -1:充值失败
            "uid": 1
        });
    }
    res.send(records);
};
