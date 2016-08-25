/**
 * client
 * @authors jonnyf
 * @date    16-8-23
 * @version 1.0
 */
"use strict";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import '../scss/main.scss';
import '../index.html'

import {Home} from "./views/home";
import DetailInfo from './views/detail_info';
import Caldetail from './views/cal_detail';
import clientServerCore from './views/client_server_core';
import ShareView from './views/share_view';
import Published from './views/published';
import Me from './views/me';
import ShopCart from './views/shop_cart';
import GoodsInfo from './views/goods_info';
import PkView from './views/pk_view';
import RedPack from './views/redpack';
import ReaCharge from './views/recharge';
import MoneyList from './views/money_list';
import PayView from './views/pay_view';
import OldOrderList from './views/old_order_list';
import Settings from './views/settings';
import PrizeList from './views/prize_list';
import MyInfo from './views/prize_list';
import PrizeInfo from './views/prize_info';
import MessageSystem from './views/message_system';
import GoodsModule from './views/goods_module';
import TypeList from './views/type_list';
import AddressList from './views/address_list';
import EditAddress from './views/edit_address';
import LoginView from './views/login';
import publicView from './components/public_view';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRoute component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/detail_info/:gid" component={DetailInfo}/>
            <Route path="/cal_detail/:sid" component={Caldetail}/>
            <Route path="/csc" component={clientServerCore}/>
            {/*<Route path="/query_photo" component={queryPhoto}/>*/}
            {/*<Route path="/query_cards" component={queryJDCards}/>*/}
            <Route path="/share_view" component={ShareView}/>
            <Route path="/published" component={Published}/>
            <Route path="/me" component={Me}/>
            <Route path="/shop_cart" component={ShopCart}/>
            <Route path="/public_view/:frame" component={publicView}/>
            <Route path="/goods_info/:sid" component={GoodsInfo}/>
            <Route path="/pk_view" component={PkView}/>
            <Route path="/redpack" component={RedPack}/>
            <Route path="/money_list" component={MoneyList}/>
            <Route path="/pay_view" component={PayView}/>
            <Route path="/old_order_list/:gid" component={OldOrderList}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/prize_list" component={PrizeList}/>
            <Route path="/my_info" component={MyInfo}/>
            <Route path="/prize_info/:sid" component={PrizeInfo}/>
            <Route path="/goods_module/:type" component={GoodsModule}/>
            <Route path="/type_list" component={TypeList}/>
            <Route path="/address_list" component={AddressList}/>
            <Route path="/edit_address/:type" component={EditAddress}/>
            <Route path="/login" component={LoginView}/>
            <Route path="/message_system" component={MessageSystem}/>
            <Route path="/recharge" component={ReaCharge}/>
        </Route>
    </Router>
), document.getElementById('duobao'));

(function (window) {
    var lastTime = 0;
    //noinspection TypeScriptUnresolvedVariable
    window.requestAnimationFrame = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (callback) {
            var currTime = new Date().getTime(),
                timeToCall = Math.max(0, 16 - (currTime - lastTime)),
                id = setTimeout(function () {
                    callback(currTime + timeToCall);
                }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
})(window);
