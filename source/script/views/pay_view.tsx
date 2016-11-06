/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import {Link} from 'react-router';
import LibHeader from '../components/header';
import webApi from '../utils/web_api';
import util from '../utils/utils_box';

export default class PayView extends React.Component<any, any> {
    private webApi;
    private document;

    constructor(props) {
        super(props);
        this.webApi = webApi;
        this.document = document;
    }

    componentDidMount() {
        this.document.querySelector('html').style.background = '#eee';
    }

    render() {
        return (
            <article className="pay-view">
                <LibHeader title="支付" toLeft={'goBack'}/>
                <header className="pay-header">
                    <div className="total-title">商品合计 <span className="total-num">300许愿币</span></div>
                    <div className="total-goods">商品数量 <span className="total-good-num">10件</span><span
                        className="right-btn" dangerouslySetInnerHTML={{__html: '&#xe604;'}}/></div>
                    <ul className="goods-list">
                        <li><span>锤子（T1）手机32G 黑色 移动</span><span>2人次</span></li>
                        <li><span>小米 7.9英寸平板 WIFI小米平板</span><span>100人次</span></li>
                        <li><span>小米 7.9英寸平板 WIFI小米平板</span><span>1000人次</span></li>
                    </ul>
                </header>
                <section className="pay-money">
                    <Link to={'/redpack/'} className="pay-redpack">
                        <div className="redpack-left"><span>红包抵扣</span><span className="has-redpack">2个可用</span></div>
                        <div className="redpack-right"><span>-5夺宝币</span><i className="right-icon"
                                                                            dangerouslySetInnerHTML={{__html: '&#xe607;'}}/>
                        </div>
                    </Link>
                    <div className="balance">
                        <div className="balance-left"><span>余额支付</span><span className="have-balance">(余额:<span
                            className="main-color">100</span>)</span></div>
                        <div className="balance-right"><span>-100夺宝币</span><span className="charge-box box"
                                                                                 dangerouslySetInnerHTML={{__html: '&#xe600;'}}/>
                        </div>
                    </div>
                </section>
                <section className="pay-method">
                    <div className="method-title">其他支付方式</div>
                    <ul className="method-lists">
                        <li>
                            <div className="pay-left-box">
                                <img className="pay-logo" src="http://dummyimage.com/200x200/4A7BF7"/>
                                <div className="method-text">
                                    <div className="method-name">支付宝</div>
                                    <div className="method-info">推荐拥有支付宝的用户使用</div>
                                </div>
                            </div>
                            <div className="radio-box">
                                <div className="radio"></div>
                            </div>
                        </li>
                    </ul>
                </section>
                <footer className="pay-go">
                    <button className="pay-btn">实付:195许愿币</button>
                </footer>
            </article>
        )
    }
}
