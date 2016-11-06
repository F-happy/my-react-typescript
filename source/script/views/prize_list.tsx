/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import {Link, hashHistory} from 'react-router';
import webApi from '../utils/web_api';
import util from '../utils/utils_box';
import LibHeader from '../components/header';
import toast from '../components/toast';

export default class PrizeList extends React.Component<any, any> {
    private document;
    constructor(props) {
        super(props);
        this.document = document;
    }

    componentDidMount() {
        this.document.querySelector('html').style.background = '#eee';
    }

    handlePrizeView(): void{
        hashHistory.push('/address_list');
    }

    render() {
        return (
            <article className="prize-list-view">
                <LibHeader title="中奖记录" toLeft={'goBack'}/>
                <section className="prize-list">
                    <Link to={`/prize_info/${'100'}`} className="prize-header">
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="good-img"/>
                        <div className="good-info">
                            <div className="good-header">
                                <div className="good-name">(第2期)2012款长安奔奔手动时尚版汽车</div>
                                <i dangerouslySetInnerHTML={{__html: '&#xe623;'}}/>
                            </div>
                            <p className="good-text main-color">订单号为：5014312</p>
                            <p className="good-text">本期参与: <span className="console-color">10</span>人次</p>
                            <p className="good-text">揭晓时间: 2015-04-05 13:30</p>
                        </div>
                    </Link>
                    <div className="prize-bottom">
                        <div className="prize-progress">
                            <div className="point-box first success-box">
                                <div className="point success">
                                    <span className="point-root"/>
                                </div>
                            </div>
                            <div className="point-box between">
                                <div className="point">
                                    <span className="point-root"/>
                                </div>
                            </div>
                            <div className="point-box over">
                                <div className="point">
                                    <i className="point-text" dangerouslySetInnerHTML={{__html: '&#xe600;'}}/>
                                </div>
                            </div>
                        </div>
                        <button className="prize-btn" onClick={this.handlePrizeView.bind(this)}>确认地址</button>
                    </div>
                </section>
                <section className="prize-list">
                    <Link to={`/prize_info/${'100'}`} className="prize-header">
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="good-img"/>
                        <div className="good-info">
                            <div className="good-header">
                                <div className="good-name">(第2期)2012款长安奔奔手动时尚版汽车</div>
                                <i dangerouslySetInnerHTML={{__html: '&#xe623;'}}/>
                            </div>
                            <p className="good-text main-color">订单号为：5014312</p>
                            <p className="good-text">本期参与: <span className="console-color">10</span>人次</p>
                            <p className="good-text">揭晓时间: 2015-04-05 13:30</p>
                        </div>
                    </Link>
                    <div className="prize-bottom">
                        <div className="prize-progress progress-begin">
                            <div className="point-box first success-box">
                                <div className="point success">
                                    <span className="point-root"/>
                                </div>
                            </div>
                            <div className="point-box between success-box">
                                <div className="point success">
                                    <span className="point-root"/>
                                </div>
                            </div>
                            <div className="point-box over">
                                <div className="point">
                                    <i className="point-text" dangerouslySetInnerHTML={{__html: '&#xe600;'}}/>
                                </div>
                            </div>
                        </div>
                        <button className="prize-btn" onClick={this.handlePrizeView.bind(this)}>确认地址</button>
                    </div>
                </section>
                <section className="prize-list">
                    <Link to={`/prize_info/${'100'}`} className="prize-header">
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="good-img"/>
                        <div className="good-info">
                            <div className="good-header">
                                <div className="good-name">(第2期)2012款长安奔奔手动时尚版汽车</div>
                                <i dangerouslySetInnerHTML={{__html: '&#xe623;'}}/>
                            </div>
                            <p className="good-text main-color">订单号为：5014312</p>
                            <p className="good-text">本期参与: <span className="console-color">10</span>人次</p>
                            <p className="good-text">揭晓时间: 2015-04-05 13:30</p>
                        </div>
                    </Link>
                    <div className="prize-bottom">
                        <div className="prize-progress progress-end">
                            <div className="point-box first success-box">
                                <div className="point success">
                                    <span className="point-root"/>
                                </div>
                            </div>
                            <div className="point-box between success-box">
                                <div className="point success">
                                    <span className="point-root"/>
                                </div>
                            </div>
                            <div className="point-box over success-box">
                                <div className="point success">
                                    <i className="point-text" dangerouslySetInnerHTML={{__html: '&#xe600;'}}/>
                                </div>
                            </div>
                        </div>
                        <button className="prize-btn" onClick={this.handlePrizeView.bind(this)}>确认地址</button>
                    </div>
                </section>
            </article>
        )
    }
}
