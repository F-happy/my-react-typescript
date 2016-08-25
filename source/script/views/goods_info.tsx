/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import {Link} from 'react-router';
import LibHeader from '../components/header';
import webApi from '../utils/web_api';
import util from '../utils/utils_box';
import {GoodInfoProps, UserListProps} from '../interface/inter_face';
import {goodType, userType} from '../interface/data_type';

export default class GoodInfo extends React.Component<GoodInfoProps, any> {
    private webApi;
    private document;

    constructor(props) {
        super(props);
        this.state = {
            gid: 0,
            userInfo: [],
            goodImg: '',
            userList: []
        };
        this.webApi = webApi;
        this.document = document;
    }

    componentDidMount() {
        this.document.querySelector('html').style.background = '#eee';
        let {sid} = this.props.params;
        this.getGoodInfo(sid);
        this.getUserInfo(sid);
    }

    getUserInfo(sid: number): void {
        this.webApi.getApi('purchase/record', {sid: sid}, (data: userType)=> {
            this.setState({
                userList: data
            });
        });
    }

    getGoodInfo(sid: number): void {
        let _userInfo: React.ReactDOM[] = [];
        this.webApi.getApi('goods/info', {sid: sid}, (data: goodType)=> {
            if (data.status == 0) {
                _userInfo = <section className="good-info">
                    <div className="good-title">
                        <span className="good-state old">已揭晓</span>
                        <span className="good-name">{data.title}</span>
                    </div>
                    <p className="good-numbers">
                        总需:{data.total}
                        <span className="remain-right">剩余: <span
                            className="main-color">{data.total - data.purchase}</span></span>
                    </p>
                    <div className="reward-box">
                        <div className="rewards-wrap">
                            <img src={data.prize.headimg} className="user-avatar"/>
                            <ul className="rewards-info">
                                <li>中奖者:<span className="name">{data.prize.username}</span></li>
                                <li>手机号码: {data.prize.phone}</li>
                                <li>用户地址: {data.prize.ip_address}</li>
                                <li>本期参与: <span className="num">{data.prize.buy}</span> 人次</li>
                                <li>揭晓时间:{util.formatDate(data.prize.prize_time)}</li>
                            </ul>
                            <div className="rewards-results">
                                中奖号码: <span className="rewards-special">{data.prize.code}</span>
                                <Link to={`/cal_detail/${data.sid}`} className="rewards-down">计算详情></Link>
                            </div>
                        </div>
                    </div>
                    <p className="share-text">一起来参与许愿吧～</p>
                </section>;
            } else if (data.status == 2) {
                _userInfo = <section className="good-info">
                    <div className="good-title">
                        <span className="good-state ing">揭晓中</span>
                        <span className="good-name">{data.title}</span>
                    </div>
                    <p className="progress">
                        <span className="progress-now" style={{width: `${(data.purchase / data.total) * 100}%`}}/>
                    </p>
                    <p className="good-numbers">
                        总需:{data.total}
                        <span className="remain-right">剩余: <span
                            className="main-color">{data.total - data.purchase}</span></span>
                    </p>
                    <div className="waiting-warp">
                        <span className="ewards-special">商品正在开奖中...</span>
                        <Link to={'/cal_detail/' + this.props.params.sid} className="ewards-down">计算详情></Link>
                    </div>
                    <p className="share-text">一起来参与许愿吧～</p>
                </section>;
            } else if (data.status == 1) {
                _userInfo = <section className="good-info">
                    <div className="good-title">
                        <span className="good-state now">进行中</span>
                        <span className="good-name">{data.title}</span>
                    </div>
                    <p className="progress">
                        <span className="progress-now" style={{width: `${(data.purchase / data.total) * 100}%`}}/>
                    </p>
                    <p className="good-numbers">
                        总需:{data.total}
                        <span className="remain-right">剩余: <span
                            className="main-color">{data.total - data.purchase}</span></span>
                    </p>
                    <p className="share-text">一起来参与许愿吧～</p>
                </section>;
            }
            this.setState({userInfo: _userInfo, goodImg: data.icon, gid: data.gid});
        });
    }

    render() {
        return (
            <article className="good-info-view">
                <LibHeader title="商品详情" toLeft={'goBack'}/>
                <section className="good-info-header">
                    <Link to={`/detail_info/${this.state.gid}`}>
                        <img className="good-info-img" src={this.state.goodImg}/>
                        <p className="header-text">点击查看更多商品详情</p>
                    </Link>
                </section>
                {this.state.userInfo}
                <ul className="list-text">
                    <Link to={`/old_order_list/${this.state.gid}`}>
                        <li><span className="list-content">往期揭晓</span>
                            <i className="right-icon" dangerouslySetInnerHTML={{__html: '&#xe607;'}}/>
                        </li>
                    </Link>
                    <li><span className="list-content">往期晒单</span>
                        <i className="right-icon" dangerouslySetInnerHTML={{__html: '&#xe607;'}}/>
                    </li>
                </ul>
                <UserList userList={this.state.userList}/>
                <footer className="good-footer">
                    <i className="add-shop" dangerouslySetInnerHTML={{__html: '&#xe60b;'}}/>
                    <button className="good-btn">立即参与</button>
                </footer>
            </article>
        )
    }
}

class UserList extends React.Component<UserListProps, any> {
    constructor(props) {
        super(props);
        this.state = {
            userList: []
        };
    }

    componentWillReceiveProps(props: GoodInfoProps): void {
        if (props.userList.length > 0) {
            this.createUserList(props.userList);
        }
    }

    createUserList(list: userType[]): void {

        let userListStr: React.ReactDOM[]  = [],
            userListHeader: React.ReactDOM = null,
            lastTime: string               = '',
            userListBody: React.ReactDOM   = null;

        list.forEach((v: userType)=> {
            if (v.buy_date == lastTime) {
                userListBody = <div className="users" key={v.ordernum}>
                    <img src={v.headimg} className="user-img"/>
                    <div className="user-info">
                        <p className="username">{v.username}</p>
                        <p className="addres">{v.ip_address} IP: {v.ip}</p>
                        <p className="user-text">参与 <span className="user-join">{v.buy}</span> 人次
                            <span className="join-time">{util.formatDate(v.buy_time)}</span>
                        </p>
                    </div>
                </div>;
                userListStr.push(userListBody);
            } else {
                lastTime = v.buy_date;
                userListHeader = <p className="list-title-time" key={v.buy_time}>{v.buy_date}</p>;
                userListBody = <div className="users" key={v.ordernum}>
                    <img src={v.headimg} className="user-img"/>
                    <div className="user-info">
                        <p className="username">{v.username}</p>
                        <p className="addres">{v.ip_address} IP: {v.ip}</p>
                        <p className="user-text">参与 <span className="user-join">{v.buy}</span> 人次
                            <span className="join-time">{util.formatDate(v.buy_time)}</span>
                        </p>
                    </div>
                </div>;
                userListStr.push(userListHeader);
                userListStr.push(userListBody);
            }
        });

        this.setState({userList: userListStr});
    };

    render() {
        if (this.props.userList > 0) {
            this.componentWillReceiveProps(1);
        }
        return (
            <section className="share-user-list">
                {this.state.userList}
            </section>
        )
    }
}
