/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import utils from '../utils/utils_box';

export default class QueryPhoto extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            errorPage: false,
            addMore: true,
            pages: 1,
            token: utils.getURL('token'),
            cardPages: []
        };
    }

    componentDidMount() {
        if (!!this.state.token && this.state.isDuoBao) {
            this.addList();

            this.touchMove(document);
        } else {
            this.setState({
                errorPage: true
            })
        }
    }

    /**
     * 加载卡密信息的函数
     */
    addList() {
        //     utils.jsonp('phonebill/list', 'token=' +
        //         this.state.token + '&page=' +
        //         this.state.pages + '&limit=5', (data)=> {
        //         if (!!data.d.bill_list && data.d.bill_list.length > 0) {
        //             this.createDOM(data.d.bill_list);
        //             if (data.d.bill_list.length >= 5) {
        //                 this.setState({
        //                     addMore: true
        //                 });
        //             } else {
        //                 this.setState({
        //                     addMore: false
        //                 });
        //             }
        //             let newPages = this.state.pages + 1;
        //             this.setState({
        //                 pages: newPages
        //             })
        //         } else {
        //             this.setState({
        //                 errorPage: true
        //             })
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
            let src = v.icon,
                period = v.period,
                title = v.title,
                prizeTime = v.prize_time,
                winner = v.user_name,
                tipText = '',
                account = v.account,
                tips = '';

            if (v.status == 2) {
                tipText = <p>充值时间：<span className="list-time">{v.create_time}</span></p>;
                tips = <div className="tip ok">充值成功</div>;
            } else if (v.status == 3 || v.status == 4) {
                tipText = <p className="list-lint">请点右下角按钮联系客服处理</p>;
                tips = <div className="tip error">充值失败</div>;
            } else if (v.status == 0 || v.status == 1 || v.status == 5) {
                tipText = <p>请耐心等待,24小时后未到账请联系客服</p>;
                tips = <div className="tip ing">充值中</div>;
            }

            returnPages.push(
                <section className="list" key={index}>
                    <figure>
                        <img className="list-img" src={src}/>
                        <div className="list-info">
                            <h3 className="list-title">(期号:{period}){title}</h3>
                            <p>开奖时间：{prizeTime}</p>
                            <p>中奖者：{winner}</p>
                        </div>
                    </figure>
                    <section className="list-pwd">
                        <p className="list-account">充值号码：<span className="list-lint">{account}</span></p>
                        {tipText}{tips}
                    </section>
                </section>
            );
        });
        if (returnPages.length > 0) {
            this.setState({
                cardPages: returnPages
            })
        }
    }

    /**
     * 判断用户划动方向
     */
    touchMove(obj) {
        let beginX, beginY, endX, endY;
        obj.addEventListener("touchstart", (event)=> {
            beginX = event.targetTouches[0].pageX;
            beginY = event.targetTouches[0].pageY;
        }, false);
        obj.addEventListener("touchmove", (event)=> {
            endX = event.targetTouches[0].pageX;
            endY = event.targetTouches[0].pageY;
        }, false);
        obj.addEventListener("touchend", (event)=> {
            let changeY = beginY - endY;
            let changeX = beginX - endX;
            if (Math.abs(changeY) > Math.abs(changeX)) {
                if (changeY > 0) {
                    document.querySelector('.btn').className = 'btn anim-down';
                } else {
                    document.querySelector('.btn').className = 'btn anim-up';
                }
            }
        }, false);
    }

    render() {
        document.title = '话费查询';
        document.body.style.background = '#eee';
        let head = <header>注: 仅支持已确认地址的话费查询</header>;
        let lists = <article id="lists">
            {this.state.cardPages}
            <button className="add-more" onClick={this.addList.bind(this)}>加载更多</button>
        </article>;
        let btn = <section className="btn" onClick={utils.addQQ.bind(this)}/>;
        let errorPage = <section className="no-tel">
            <div className="no-img"></div>
            <p className="no-text">暂无充值信息~~</p>
        </section>;
        let view = <div></div>;

        if (this.state.errorPage) {
            view = <div className="query-photo-view">{errorPage}</div>;
        } else {
            view = <div className="query-photo-view">{head}{lists}{btn}</div>;
        }
        return view;
    }
}
