/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import {Link} from 'react-router';
import LibHeader from '../components/header';
import webApi from '../utils/web_api';

export default class PkView extends React.Component<any, any> {
    private webApi;
    private document;

    constructor(props) {
        super(props);
        this.webApi = webApi;
        this.document = document;
        this.state = {
            items: ['两人PK', '三人PK', '五人PK'],
            active: 0
        }
    }

    componentDidMount() {
        this.document.querySelector('html').style.background = '#eee';
    }

    handleSwitch(index) {
        this.setState({active: index});
    }

    render() {
        return (
            <article className="pk-view">
                <LibHeader title="PK专区" toLeft={'goBack'}/>
                <section className="top-banner">
                    <div className="banner-img"></div>
                    <div className="result">专区规则></div>
                </section>
                <ul className="tab">
                    {
                        this.state.items.map((v, index)=> {
                            return <li className={`rank-result${(this.state.active == index) ? ' active' : ''}`}
                                       key={index}
                                       onClick={this.handleSwitch.bind(this, index)}>{v}</li>
                        })
                    }
                </ul>
                <section className="pk-good-lists">
                    <div className="goods">
                        <div className="good-img"
                             style={{backgroundImage: 'url(http://dummyimage.com/260x260/4A7BF7)'}}></div>
                        <div className="good-title">设计哈哈哈哈哈哈哈哈哈哈哈哈</div>
                        <div className="good-info">
                            <p className="progress">
                                <span className="new" style={{width: '66.6%'}}/>
                                <span className="tag" style={{left: `${(100 / 3)}%`}}/>
                                <span className="tag" style={{left: `${(100 / 3) * 2}%`}}/>
                            </p>
                            <p className="text-box">
                                <span>总需20</span>
                                <span className="right"><span className="main-color">1人</span>参与</span>
                            </p>
                            <button className="add-shop" dangerouslySetInnerHTML={{__html: '&#xe622;'}}/>
                        </div>
                        <Link to={`/goods_info/${50}`} className="join-shop">剩余1名额</Link>
                    </div>
                </section>
                <footer className="pk-footer">暂无更多商品~</footer>
            </article>
        )
    }
}
