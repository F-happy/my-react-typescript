/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import utils from '../utils/utils_box';

export default class queryJDCards extends React.Component<any, any> {
    private sign;
    public refs;
    constructor(props) {
        super(props);
        this.state = {
            nullPage: false,
            addMore: true,
            pages: 1,
            login: false,
            token: utils.getURL('token'),
            cardPages: []
        };
        this.sign = '';
    }

    componentDidMount() {
        if (!!this.state.token) {
            if (this.state.login) {

            }
        } else {
            this.setState({
                nullPage: true
            })
        }
    }

    login() {
        const account  = this.refs.account.value,
            password = this.refs.password.value;
        if (!!account && !!password && account.length > 10) {
            // utils.jsonp('login', 'token=' + this.state.token
            //     + '&phone=' + account
            //     + '&pwd=' + password, (data)=> {
            //     if (data.c == 0) {
            //         this.sign = data.d.session;
            //         this.addList();
            //     } else {
            //         alert(data.err);
            //     }
            // });
        } else {
            alert('请输入正确的账户名或密码！');
        }
    }

    /**
     * 加载卡密信息的函数
     */
    addList() {
    //     utils.jsonp('card/list', 'token=' +
    //         this.state.token + '&page=' +
    //         this.state.pages + '&session=' +
    //         this.sign + '&limit=5', (data)=> {
    //         let length = data.d.card_list.length || 0;
    //         if (!!data.d.card_list && length > 0) {
    //             this.createDOM(data.d.card_list);
    //             if (length >= 5) {
    //                 this.setState({
    //                     login: true
    //                 });
    //             } else {
    //                 this.setState({
    //                     addMore: false,
    //                     login: true
    //                 });
    //             }
    //             let newPages = this.state.pages + 1;
    //             this.setState({
    //                 pages: newPages
    //             })
    //         } else {
    //             if (!this.state.cardPages.length > 0){
    //                 this.setState({
    //                     nullPage: true
    //                 })
    //             }
    //         }
    //     });
    }

    /**
     * 根据传入的数组拼装DOM节点
     * @param   list
     * @returns {string}
     * @private
     */
    createDOM(list) {
        let returnPages = [];

        list.forEach((v, index)=> {
            returnPages.push(
                <section className="card" key={index}>
                    <figure>
                        <img className="card-img" src={v.icon}/>
                        <div className="card-info">
                            <h3 className="card-title">(第{v.period}期){v.title}</h3>
                            <p className="cart-time">开奖时间：{v.prize_time}</p>
                            <p className="cart-time">中奖者：{v.username}</p>
                        </div>
                    </figure>
                    <section className="card-pwd">
                        <p className="card-account">账号：<span className="card-lint">{v.cardno}</span>
                            <a href={'duobao://webview/copy?content=' + v.cardno}>复制</a>
                        </p>
                        <p className="card-password">密码：<span className="card-lint">{v.cardpw}</span>
                            <a href={'duobao://webview/copy?content=' + v.cardpw}>复制</a>
                        </p>
                    </section>
                </section>
            );
        });
        if (returnPages.length >= 0) {
            this.setState({
                cardPages: returnPages
            })
        }
    }

    render() {
        document.body.style.background = '#eee';

        let view = <div></div>;

        let add = <button className="add-more" onClick={this.addList.bind(this)}>加载更多</button>;

        if (this.state.nullPage) {
            view = <div className="query-jd-view">
                <article className="input-model">
                    <header/>
                    <section className="noneLogin">目前未登录，请先登陆，即可查询卡密哦！</section>
                </article>
            </div>;
        } else if (!this.state.login) {
            view = <div className="query-jd-view">
                <article className="input-model">
                    <header/>
                    <div className="input">
                        <input ref="account" type="tel" placeholder="请输入您的账号" maxlength="11"/>
                    </div>
                    <div className="input">
                        <input ref="password" type="password" placeholder="请输入您的密码"/>
                    </div>
                    <button onClick={this.login.bind(this)}>提取卡密</button>
                    <p className="button-title">• 目前只支持注册账号与充值号码一致的奖品查询；</p>
                    <p className="button-title">• 为避免交易纠纷，请在10分钟内绑定卡密。</p>
                </article>
            </div>;
        } else if (this.state.cardPages.length > 0) {
            view = <div className="query-jd-view" style={{margin: 0}}>
                {this.state.cardPages}
                {this.state.addMore ? add : <p className="no-card">您暂时没有可查询的卡密信息</p>}
            </div>;
        } else {
            view = <div className="query-jd-view">
                <section className="no-tel">
                    <div className="no-img"></div>
                    <p className="no-text">暂无充值信息~~</p>
                </section>
            </div>;
        }
        return view;
    }
}
