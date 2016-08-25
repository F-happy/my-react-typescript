/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import webApi from '../utils/web_api';
import LibHeader from '../components/header';
import {CaldetailProps} from '../interface/inter_face';
import {caldetailType} from '../interface/data_type';

export default class Caldetail extends React.Component<CaldetailProps, any> {
    private _document;
    private webApi;
    refs: {
        [string: string]: any;
        open: Element;
        query: Element;
        userList: HTMLElement;
    };

    constructor(props) {
        super(props);
        this.state = {
            href: '#/cal_detail',
            numA: '系统繁忙，请稍后重试',
            numB: '系统繁忙，请稍后重试',
            query: '开奖查询',
            results: '请重新打开许愿夺宝',
            purList: []
        };
        this._document = document;
        this.webApi = webApi;
    }

    componentDidMount() {
        this._document.querySelector('html').style.background = '#eee';
        let {sid} = this.props.params;
        this.webApi.getApi('caldetail/info', {sid: sid}, (data: caldetailType)=> {
            if (data.status == 1) {
                let salesList = data.d.sales;
                //根据status值进行状态判断
                switch (salesList.status) {
                    case 0:
                        this.setState({
                            numB: salesList.codeb + '(第' + salesList.lottery_period + '期)',
                            results: '计算结果：' + salesList.code
                        });
                        break;
                    case 2:
                        this.setState({
                            numB: '等待开奖(第' + salesList.lottery_period + '期)',
                            results: '计算结果：等待揭晓'
                        });
                        break;
                    case -2:
                        this.setState({
                            numB: '等待开奖(第' + salesList.lottery_period + '期)',
                            results: '计算结果：等待揭晓'
                        });
                        break;
                    default :
                        return;
                }
                this.setState({
                    href: data.d.query_url,
                    numA: salesList.codea
                });
            }

            if (data.d.purs.length > 0) {
                let pur = [];
                data.d.purs.forEach((v, index)=> {
                    pur.push(
                        <p className="list" key={index}>
                            <span className="times">{v.time}
                                <span className="num">→{v.number}</span>
                            </span>
                            <span className="user-name">{v.username}</span>
                        </p>
                    )
                });
                this.setState({
                    purList: pur
                });
            } else {
                this.refs.open.className = 'pre-bad';
                this.refs.query.className = 'query-bad';
            }
        });
    }

    handleOpenPre(): void {
        if (this.refs.open.className == 'pre') {
            this.refs.userList.style.display = 'block';
            this.refs.open.className = 'pre-rotating';
        } else {
            this.refs.userList.style.display = 'none';
            this.refs.open.className = 'pre';
        }
    }

    render() {
        return (
            <div className="caldetail-view">
                <LibHeader title="计算详情" toLeft={'goBack'}/>
                <header className="caldetail-header">
                    <div className="head-result">幸运<br/>号码</div>
                    <span className="symbol"> = </span>
                    <div className="head-calculate">
                        <p className="numbers">数值<span className="title">A</span> + 数值<span className="title">B</span>
                        </p>
                        <p className="totals">商品总需人次</p>
                    </div>
                    <span className="symbol"> + </span>
                    <div className="head-number">10000001</div>
                </header>
                <section className="result">
                    <div className="texts">
                        <p className="title">A</p>
                        <span className="symbol"> =</span>
                        <div className="text">截止该奖品开奖时间点前本站全部奖品的最后50个参与时间所代表数值之和</div>
                    </div>
                    <div className="number">
                        <span className="symbol">=</span>
                        <p className="text-result">{this.state.numA}</p>
                        <span className="pre" ref="open" onClick={this.handleOpenPre.bind(this)}/>
                    </div>
                </section>
                <section ref="userList" className="users">
                    <div className="users-title">
                        <span className="join-time">参与时间</span>
                        <span className="fr">用户</span>
                    </div>
                    <div className="user-lists">{this.state.purList}</div>
                </section>
                <section className="result">
                    <div className="texts">
                        <p className="title">B</p>
                        <span className="symbol"> =</span>
                        <div className="text">最近一期中国福利彩票 “ 老时时彩 ” 的开奖结果</div>
                    </div>
                    <div className="number">
                        <span className="symbol">=</span>
                        <p className="text-result-b">{this.state.numB}</p>
                        <a className="query" ref="query" href={this.state.href}>{this.state.query}</a>
                    </div>
                </section>
                <section className="results">{this.state.results}</section>
                <section className="result-state">
                </section>
            </div>
        )
    }
}
