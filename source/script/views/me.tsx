/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import {Link} from 'react-router';
import LibHeader from '../components/header';
import LibFooter from '../components/footer';
import LineBlock from '../components/inline_block_link';
import webApi from '../utils/web_api';
import {digLogProps} from '../interface/inter_face';

export default class Me extends React.Component<any, any> {
    private webApi;

    constructor(props) {
        super(props);
        this.state = {
            qCode: false,
            invite: false
        };
        this.webApi = webApi;
    }

    // componentDidMount() {}

    handleInvitedHidden(msg: string): void {
        if (msg == 'hidden') {
            this.setState({invite: false})
        }
    }

    handleCodeHidden(msg: string): void {
        switch (msg) {
            case 'qcode':
                this.setState({qCode: !this.state.qCode});
                break;
            case 'addr':
                break;
        }
    }

    render() {
        return (
            <article className="me-view">
                <LibHeader title="我" toRight="setting"/>
                <UserInfo/>
                <RecordList/>
                <OtherList handleHidden={this.handleCodeHidden.bind(this)}/>
                {this.state.qCode ? <CodeDigLog handleHidden={this.handleCodeHidden.bind(this)}/> : ''}
                {this.state.invite ? <InvitedDigLog handleInvited={this.handleInvitedHidden.bind(this)}/> : ''}
                <LibFooter act="me"/>
            </article>
        )
    }
}

class UserInfo extends React.Component<digLogProps, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="user-info">
                <Link to={'/my_info/'} className="user-header">
                    <div className="user-img"><img src="http://dummyimage.com/200x200/4A7BF7"/></div>
                    <div className="user-content">
                        <div className="user-name">哈哈哈哈哈哈</div>
                        <div className="user-id">唯一ID: <span className="console-color">1000548</span></div>
                    </div>
                    <i className="right-icon" dangerouslySetInnerHTML={{__html: '&#xe607;'}}/>
                </Link>
                <div className="user-body">
                    <Link to={'/redpack/'} className="user-redpack">
                        <i className="redpack-icon"/>
                        <p className="user-font">我的红包</p>
                        <p className="text">3个可用</p>
                    </Link>
                    <div className="line"></div>
                    <Link to={'/money_list/'} className="user-money">
                        <i className="money-icon"/>
                        <p className="user-font">许愿币充值</p>
                        <p className="text">余额:<span className="main-color">100</span></p>
                    </Link>
                    <div className="line"></div>
                    <div className="user-luck-dou">
                        <i className="luck-icon"/>
                        <p className="user-font">幸运豆</p>
                        <p className="text">1500</p>
                    </div>
                </div>
            </section>
        )
    }
}

class RecordList extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="record-lists">
                <LineBlock toContent="许愿记录" toLink="prize_list" icon="&#xe616;"/>
                <LineBlock toContent="中奖记录" toLink="prize_list" icon="&#xe612;"/>
                <LineBlock toContent="晒单记录" toLink="prize_list" icon="&#xe61d;"/>
            </section>
        )
    }
}

class OtherList extends React.Component<digLogProps, any> {
    constructor(props) {
        super(props);
    }

    handleCodeShow(): void {
        this.props.handleHidden('qcode');
    }

    render() {
        return (
            <ul className="other-list">
                <LineBlock toContent="我的收货地址" toLink="address_list" icon="&#xe614;"/>
                <li onClick={this.handleCodeShow.bind(this)}>
                    <i className="me-icon" dangerouslySetInnerHTML={{__html: '&#xe60c;'}}/>
                    <span className="list-content">二维码分享</span>
                    <i className="right-icon" dangerouslySetInnerHTML={{__html: '&#xe607;'}}/>
                </li>
            </ul>
        )
    }
}

class CodeDigLog extends React.Component<digLogProps, any> {
    constructor(props) {
        super(props);
    }

    handleCodeShow(): void {
        this.props.handleHidden('qcode');
    }

    render() {
        return (
            <article className="dig-log">
                <section className="qcode-alert-box">
                    <i className="close-icon" onClick={this.handleCodeShow.bind(this)}
                       dangerouslySetInnerHTML={{__html: '&#xe601;'}}/>
                    <div className="qcode-title">分享许愿夺宝给更多好友</div>
                    <div className="qcode-share"/>
                    <div className="code-footer">
                        <div className="footer-box">
                            <div className="wechat-icon-big"/>
                            微信好友
                        </div>
                        <div className="footer-box">
                            <div className="friend-icon-big"/>
                            朋友圈
                        </div>
                    </div>
                </section>
            </article>
        )
    }
}

class InvitedDigLog extends React.Component<digLogProps, any> {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {}

    hiddenBody(): void {
        this.props.handleInvited('hidden');
    }

    render() {
        return (
            <article className="dig-log">
                <section className="invited-alert-box">
                    <div className="invite-header"></div>
                    <div className="invite-input">
                        <input type="number" placeholder="请输入邀请码"/>
                    </div>
                    <div className="input-title">填写邀请码额外获得好友红包</div>
                    <div className="btn-box">
                        <button className="invite-none" onClick={this.hiddenBody.bind(this)}>无邀请码</button>
                        <button className="invite-ok">确认</button>
                    </div>
                </section>
            </article>
        )
    }
}
