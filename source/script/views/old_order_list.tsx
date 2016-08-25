/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import { Link } from 'react-router';
import webApi from '../utils/web_api';
import util from '../utils/utils_box';
import LibHeader from '../components/header';
import {OrderListProps} from '../interface/inter_face';

export default class OldOrderList extends React.Component<OrderListProps, any> {
    private document;
    constructor(props){
        super(props);
        this.document = document;
    }

    componentDidMount() {
        this.document.querySelector('html').style.background = '#eee';
        let {gid} = this.props.params;
        console.log(gid);
    }

    render(){
        return (
            <article className="old-order-list">
                <LibHeader title="往期揭晓" toLeft={'goBack'}/>
                <section className="order-list">
                    <div className="list-header">第100期(揭晓时间: 2小时前)</div>
                    <div className="list-body">
                        <div className="list-img"><img src="http://dummyimage.com/200x200/4A7BF7"/></div>
                        <div className="user-info">
                            <div className="user-name">中奖者: <span className="name">用户名用户名</span></div>
                            <div className="user-number">幸运号码: <span className="main-color">10000093</span></div>
                            <div className="join-number">本期参与: 100人次</div>
                        </div>
                        <i className="right-icon" dangerouslySetInnerHTML={{__html: '&#xe607;'}}/>
                    </div>
                </section>
                <section className="order-list">
                    <div className="list-header">第100期(揭晓时间: 2小时前)</div>
                    <div className="list-body">
                        <div className="list-img"><img src="http://dummyimage.com/200x200/4A7BF7"/></div>
                        <div className="user-info">
                            <div className="user-name">中奖者: <span className="name">用户名用户名</span></div>
                            <div className="user-number">幸运号码: <span className="main-color">10000093</span></div>
                            <div className="join-number">本期参与: 100人次</div>
                        </div>
                        <i className="right-icon" dangerouslySetInnerHTML={{__html: '&#xe607;'}}/>
                    </div>
                </section>
                <section className="order-list">
                    <div className="list-header">第100期(揭晓时间: 2小时前)</div>
                    <div className="list-body">
                        <div className="list-img"><img src="http://dummyimage.com/200x200/4A7BF7"/></div>
                        <div className="user-info">
                            <div className="user-name">中奖者: <span className="name">用户名用户名</span></div>
                            <div className="user-number">幸运号码: <span className="main-color">10000093</span></div>
                            <div className="join-number">本期参与: 100人次</div>
                        </div>
                        <i className="right-icon" dangerouslySetInnerHTML={{__html: '&#xe607;'}}/>
                    </div>
                </section>
                <section className="order-list">
                    <div className="list-header">第100期(揭晓时间: 2小时前)</div>
                    <div className="list-body">
                        <div className="list-img"><img src="http://dummyimage.com/200x200/4A7BF7"/></div>
                        <div className="user-info">
                            <div className="user-name">中奖者: <span className="name">用户名用户名</span></div>
                            <div className="user-number">幸运号码: <span className="main-color">10000093</span></div>
                            <div className="join-number">本期参与: 100人次</div>
                        </div>
                        <i className="right-icon" dangerouslySetInnerHTML={{__html: '&#xe607;'}}/>
                    </div>
                </section>
                <section className="order-list">
                    <div className="list-header">第100期(揭晓时间: 2小时前)</div>
                    <div className="list-body">
                        <div className="list-img"><img src="http://dummyimage.com/200x200/4A7BF7"/></div>
                        <div className="user-info">
                            <div className="user-name">中奖者: <span className="name">用户名用户名</span></div>
                            <div className="user-number">幸运号码: <span className="main-color">10000093</span></div>
                            <div className="join-number">本期参与: 100人次</div>
                        </div>
                        <i className="right-icon" dangerouslySetInnerHTML={{__html: '&#xe607;'}}/>
                    </div>
                </section>
                <section className="order-list">
                    <div className="list-header">第100期(揭晓时间: 2小时前)</div>
                    <div className="list-body">
                        <div className="list-img"><img src="http://dummyimage.com/200x200/4A7BF7"/></div>
                        <div className="user-info">
                            <div className="user-name">中奖者: <span className="name">用户名用户名</span></div>
                            <div className="user-number">幸运号码: <span className="main-color">10000093</span></div>
                            <div className="join-number">本期参与: 100人次</div>
                        </div>
                        <i className="right-icon" dangerouslySetInnerHTML={{__html: '&#xe607;'}}/>
                    </div>
                </section>
            </article>
        )
    }
}
