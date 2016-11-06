/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import {hashHistory} from 'react-router';
import LibHeader from '../components/header';
import utils from '../utils/utils_box';

export default class clientServerCore extends React.Component<any, any> {
    private window: any;
    private document: any;

    constructor(props) {
        super(props);
        this.window = window;
        this.document = document;
    }

    componentDidMount() {
        this.document.querySelector('html').style.background = '#eee';
    }

    queryCard(): void {
        hashHistory.push('/query_cards');
    }

    queryTelMoney(): void {
        hashHistory.push('/query_photo');
    }

    openContent(e) {
        const ele = e.target;
        if (ele.className == 'csc-title' || ele.parentElement.className == 'csc-title') {
            let id     = ele.id || ele.parentElement.id,
                preEle = ele.children[0] || ele,
                texts  = this.document.querySelectorAll('.text'),
                idEle  = this.document.querySelector('#t' + id).style,
                pre    = this.document.querySelector('.pre-rotating');

            if (idEle.display == 'block') {
                idEle.display = 'none';
                if (!!pre) {
                    pre.className = 'pre';
                }
            } else {
                for (let i = 0; i < texts.length; i++) {
                    texts[i].style.display = 'none';
                }
                idEle.display = 'block';
                if (ele.className == 'csc-title' || preEle.className == 'pre') {
                    preEle.className = 'pre-rotating';
                }
            }
        }
    }

    changeTap(e) {
        const ele = e.target;
        if (ele.className != 'act' && ele.nodeName == 'LI') {
            let type  = ele.dataset.type,
                texts = this.document.querySelectorAll('.text'),
                pre   = this.document.querySelector('.pre-rotating'),
                row   = this.document.querySelectorAll('.content>.row');
            if (!!pre) {
                pre.className = 'pre';
            }
            document.querySelector('.act').className = '';
            ele.className = 'act';
            for (let i = 0; i < texts.length; i++) {
                texts[i].style.display = 'none';
            }
            for (let i = 0; i < row.length; i++) {
                row[i].className = 'row anim-' + type;
            }
        }
    }

    render() {
        return (
            <div className="csc-view">
                <LibHeader title="客服中心" toLeft={'goBack'}/>
                <ul className="csc-header">
                    <li className="row" onTouchStart={this.queryCard.bind(this)}>
                        <div className="card img"></div>
                        <div className="head-info">
                            <h3>卡密查询</h3>
                            <p>京东卡,天猫卡</p>
                        </div>
                    </li>
                    <li className="row line" onTouchStart={this.queryTelMoney.bind(this)}>
                        <div className="phone img"></div>
                        <div className="head-info">
                            <h3 style={{color: '#2dcf7d'}}>话费查询</h3>
                            <p>话费自助查</p>
                        </div>
                    </li>
                </ul>
                <ul className="tab" onTouchStart={this.changeTap.bind(this)}>
                    <li className="act" data-type="left">常见问题</li>
                    <li data-type="right">奖品问题</li>
                </ul>
                <ul className="content" onTouchStart={this.openContent.bind(this)}>
                    <li className="row">
                        <span id="1" className="csc-title">什么是许愿夺宝？<span className="pre"/></span>
                        <span id="2" className="csc-title">中奖了什么时候发货？<span className="pre"/></span>
                    </li>
                    <div id="t1" className="text">许愿夺宝把每件奖品平分成若干“等份”出售，每份1元，用户可以认购若干份。当一件奖品所有“等份”售出后，
                        将根据老时时彩的开奖数据并配合透明、固定的计算规则计算出一个夺宝号码，拥有该夺宝号码的幸运者即可获得此奖品。
                    </div>
                    <div id="t2" className="text">中奖后请确认收货地址（我-->中奖记录-->点击确认收货地址），我们会在您确认地址后的5个工作日内发货。
                        发货会有短信通知，请您留意。如遇到某些奖品库存不足等问题，发货时间可能有所延迟，请您耐心等待哦~
                    </div>
                    <li className="row">
                        <span id="3" className="csc-title">怎么参与许愿夺宝？<span className="pre"/></span>
                        <span id="4" className="csc-title">我的奖品由哪家物流公司配送？<span className="pre"/></span>
                    </li>
                    <div id="t3" className="text">选择想要得到的奖品，点击立即参与，选择想要参与许愿的份额，选择结算，确认支付即可得到对应的夺宝号码。</div>
                    <div id="t4" className="text">我们会根据不同的奖品性质配备不同的物流公司，数码类均为顺丰／京东发货。
                        具体信息请在收到发货短信后自助查看物流情况（我-->中奖记录-->查看宝贝-->物流追踪）。另物流信息的录入与发货时间存在一定的时滞，
                        一般在2个工作日内物流会同步更新，若暂时查不到物流信息请您请耐心等待2个工作日。
                    </div>
                    <li className="row">
                        <span id="5" className="csc-title">怎么查看是否中奖？<span className="pre"/></span>
                        <span id="6" className="csc-title">中奖奖品会有发票吗？<span className="pre"/></span>
                    </li>
                    <div id="t5" className="text">中奖会有短信通知，或者您可以在个人中心-中奖记录查看</div>
                    <div id="t6" className="text">许愿夺宝是用户购买电商优惠券的商业促销活动，因此用户获得的奖品，许愿夺宝不提供相关发票。</div>
                    <li className="row">
                        <span id="7" className="csc-title">中奖号码如何计算？<span className="pre"/></span>
                        <span id="8" className="csc-title">十年使用权是什么意思？<span className="pre"/></span>
                    </li>
                    <div id="t7" className="text">本期中奖号码=（50个时间求和+最新一期老时时彩开奖号码）/该商品总需人次 [取余数]+原始数10000001，使用了
                        第三方数据“老时时彩”开奖结果作为参数，确保幸运号码的随机性与公平性。若对公式有所疑问的请查看客户端内首页滚动页《计算公式详解》
                    </div>
                    <div id="t8" className="text">有关10年使用权只是针对我们平台价值高于5000元的宝贝规避法律风险的一个声明，只要您获得该宝贝，
                        那么您就拥有了该宝贝的所有权和使用权，不必担心10年或20年后需要归还的问题。请放心使用。
                    </div>
                    <li className="row">
                        <span id="9" className="csc-title">付款后没有得到夺宝号码怎么办？<span className="pre"/></span>
                        <span id="0" className="csc-title">收到奖品发现有质量问题怎么办？<span className="pre"/></span>
                    </li>
                    <div id="t9" className="text">购买后得不到夺宝号可以查看一下-“我”的页面-“夺宝币”。付款失败系统会自动退还夺宝币给您，您可核对您的夺宝币的余额检查确认。</div>
                    <div id="t0" className="text">请联系在线客服解决。</div>
                </ul>
                <div className="add-qq" onClick={utils.addQQ.bind(this)}></div>
            </div>
        )
    }
}
