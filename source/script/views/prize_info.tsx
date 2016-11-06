/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import {Link} from 'react-router';
import webApi from '../utils/web_api';
import util from '../utils/utils_box';
import LibHeader from '../components/header';
import {PrizeProps} from '../interface/inter_face';
import toast from '../components/toast';

export default class PrizeInfo extends React.Component<PrizeProps, any> {
    private document;

    constructor(props) {
        super(props);
        this.document = document;
    }

    componentDidMount() {
        this.document.querySelector('html').style.background = '#eee';
        let {sid} = this.props.params;
    }

    render() {
        return (
            <article className="prize-info-view">
                <LibHeader title="中奖详情" toLeft={'goBack'}/>
                <section className="prize-header">
                    <img src="http://dummyimage.com/200x200/4A7BF7" className="good-img"/>
                    <div className="good-info">
                        <div className="good-header">
                            <div className="good-name">(第2期)2012款长安奔奔手动时尚版汽车</div>
                        </div>
                        <p className="good-text main-color">订单号为：5014312</p>
                        <p className="good-text">本期参与: <span className="console-color">10</span>人次</p>
                        <p className="good-text">揭晓时间: 2015-04-05 13:30</p>
                    </div>
                </section>
                {/*<button className="prize-btn-success">确认地址 安排收货</button>*/}
                {/*<section className="prize-title">确认号码</section>*/}
                {/*<section className="prize-phone main-color">18642636963</section>*/}
                {/*<button className="prize-btn-success">确认号码 马上充值</button>*/}
                <section className="prize-title">物流信息</section>
                <section className="logistics-info">
                    <div>
                        <p className="logistics-com">物流公司:</p><p>订单号:</p>
                    </div>
                    <div className="logistics">
                        <p className="logistics-name">京东配送</p><p>18642636963</p>
                    </div>
                    <button className="logistics-btn">物流追踪</button>
                </section>
                <section className="prize-title">收货信息</section>
                <section className="prize-good-info">
                    <div>
                        <p>收货人:</p><p className="user-between">联系方式:</p><p>详细地址:</p>
                    </div>
                    <div className="user-info">
                        <p className="user-name">付会翔</p>
                        <p className="user-between main-color">18642636963</p>
                        <p className="console-color">广东省 广州市 番禺区 广州大学城外环 西路100号广东工业大学东区9栋</p>
                    </div>
                </section>
            </article>
        );
    }
}
