/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import LibHeader from '../components/header';
import webApi from '../utils/web_api';
import util from '../utils/utils_box';
import {redpackType} from '../interface/data_type';

export default class RedPack extends React.Component<any, any> {
    private webApi;
    private document;

    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            items: ['未使用', '已使用/过期'],
            redList: [],
            redListOld: [],
            page: 0
        };
        this.webApi = webApi;
        this.document = document;
    }

    componentDidMount() {
        this.document.querySelector('html').style.background = '#eee';
        // this.loadRedPack(this.state.page);
    }

    /**
     * 加载红包
     * @param page
     */
    loadRedPack(page: number): void {
        this.webApi.getApi('user/redpack/list', {limit: 10, start_id: page}, (data)=> {
            let redList: React.ReactDOM[]    = [],
                oldRedList: React.ReactDOM[] = [];

            data.d.forEach((v: redpackType)=> {
                if (v.enable == 1) {
                    redList.push(
                        <div className="red-pack" key={v.id}>
                            <div className="red-left-box">
                                <div className="money"><span>¥</span><span className="money-num">{v.price}</span></div>
                                <div className="line">·</div>
                                <div className="result">满{v.restrict_money}元可用</div>
                            </div>
                            <div className="red-right-box">
                                <h3 className={`red-title${(v.is_valid == 1) ? ' has' : ' not'}`}>{v.title}</h3>
                                <div className="text">{v.description}</div>
                                <div className="time-text">生效时间: {util.formatDate(v.start_time)}</div>
                                <div className="time-text">截止时间: {util.formatDate(v.expire_time)}</div>
                            </div>
                            <i className="right-icon" dangerouslySetInnerHTML={{__html: '&#xe607;'}}/>
                        </div>
                    );
                } else {
                    oldRedList.push(
                        <div className="red-pack none-view" key={v.id}>
                            <div className="red-left-box none-view">
                                <div className="money"><span>¥</span><span className="money-num">{v.price}</span></div>
                                <div className="line">·</div>
                                <div className="result">满{v.restrict_money}元可用</div>
                            </div>
                            <div className="red-right-box">
                                <h3 className={`red-title${(v.is_valid == 1) ? ' has' : ' not'}`}>{v.title}</h3>
                                <div className="text">{v.description}</div>
                                <div className="time-text">生效时间: {util.formatDate(v.start_time)}</div>
                                <div className="time-text">截止时间: {util.formatDate(v.expire_time)}</div>
                            </div>
                            <i className="right-icon" dangerouslySetInnerHTML={{__html: '&#xe607;'}}/>
                        </div>
                    );
                }
            });
        });
    }

    handleSwitch(index: number): void {
        this.setState({active: index});
    }

    render() {
        let viewList: React.ReactDOM[] = [],
            noneView: React.ReactDOM   = <section className="none-box">
                <div className="none-icon" dangerouslySetInnerHTML={{__html: '&#xe625;'}}/>
                <h3 className="none-title">没有可使用的红包</h3>
            </section>;
        if (this.state.active == 0) {
            viewList = (this.state.redList.length > 0) ? this.state.redList : noneView;
        } else {
            viewList = (this.state.redListOld.length > 0) ? this.state.redListOld : noneView;
        }
        return (
            <article className="red-pack-view">
                <LibHeader title="我的红包" toLeft={'goBack'}/>
                <ul className="red-pack-controller">
                    {
                        this.state.items.map((v, index)=> {
                            return <li className={`red-pack-result${(this.state.active == index) ? ' active' : ''}`}
                                       key={index}
                                       onClick={this.handleSwitch.bind(this, index)}>{v}</li>
                        })
                    }
                </ul>
                <section className="red-pack-lists">
                    {viewList}
                </section>
            </article>
        );
    }
}
