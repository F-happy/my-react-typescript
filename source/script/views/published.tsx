/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import LibHeader from '../components/header';
import LibFooter from '../components/footer';
import webApi from '../utils/web_api';
import {pushGoodType} from '../interface/data_type';
// import countdown from '../utils/countdown';

export default class Published extends React.Component<any, any> {
    private webApi;
    private timeLock: boolean;
    private times: number;
    private document: any;

    constructor(props) {
        super(props);
        this.state = {
            domList: []
        };
        this.times = 0;
        this.timeLock = true;
        this.webApi = webApi;
        this.document = document;
    }

    componentDidMount() {
        this.document.querySelector('html').style.background = '#eee';
        this.webApi.getApi('openlist', '', (data)=> {
            this.createDom(data.new_lists);
        });
    }

    componentDidUpdate(): void {
        if (this.timeLock) {
            this.timeLock = false;
            // countdown.timeAnimation(this.times, ()=>{
            //     console.log('over');
            // });
        }
    }

    createDom(list: any[]) {
        let _domList: React.ReactDOM[] = [];

        list.forEach((v: pushGoodType, index: number)=> {
            if (v.type == 1) {
                this.times = v.time;
                _domList.push(
                    <section className="publish-body" key={index}>
                        <img className="good-img" src={v.icon}/>
                        <div className="good-info">
                            <div className="good-title">{v.title}</div>
                            <div className="good-money">商品价值: ￥{v.total}</div>
                            <div className="times">
                                <i className="time-icon" dangerouslySetInnerHTML={{__html: '&#xe620;'}}/>
                                <span className="time-text">正在揭晓</span><span className="time-now"
                                                                             id="time1">{v.time}</span>
                            </div>
                        </div>
                    </section>
                );
            } else if (v.type == 2) {
                _domList.push(
                    <section className="publish-body" key={index}>
                        <img className="good-img" src={v.icon}/>
                        <div className="good-info">
                            <div className="good-title">{v.title}</div>
                            <div className="good-money">商品价值: ￥{v.total}</div>
                            <div className="times-error">福彩故障,距离开奖还有2小时。</div>
                        </div>
                    </section>
                );
            } else if (v.type == 3) {
                _domList.push(
                    <section className="publish-body" key={index}>
                        <img className="good-img" src={v.icon}/>
                        <div className="user-info">
                            <div className="user-name">获奖者: <span className="console-color">{v.user_name}</span></div>
                            <div className="good-money">商品价值: ￥{v.total}</div>
                            <div className="user-join">本期夺宝: <span className="console-color">{v.remain}人次</span></div>
                            <div className="luck-num">幸运号码: <span className="main-color">{v.luck_code}</span></div>
                            <div className="join-time">揭晓时间: {v.time}</div>
                            <div className="user-icon"><img src={v.user_icon}/></div>
                        </div>
                    </section>
                );
            }
            this.setState({domList: _domList});
        });
    }

    render() {
        return (
            <div className="publish-view">
                <LibHeader title="最新揭晓"/>
                <article className="publish-lists">
                    {this.state.domList}
                </article>
                <LibFooter act="publish"/>
            </div>
        )
    }
}
