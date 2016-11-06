/**
 * 晒单页面
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import {Link} from 'react-router';
import LibHeader from '../components/header';
import LibFooter from '../components/footer';
import webApi from '../utils/web_api';
import {shareType} from '../interface/data_type';

export default class ShareView extends React.Component<any, any> {
    private webApi;

    constructor(props) {
        super(props);
        this.state = {
            shareList: []
        };
        this.webApi = webApi;
    }

    componentDidMount() {
        this.webApi.getApi('share_goods', '', (data)=> {
            this.setState({
                'shareList': data.share_lists
            });
        });
    }

    render() {
        let shares: React.ReactDOM[] = [];

        this.state.shareList.forEach((v: shareType, index: number)=> {
            let shareImages: React.ReactDOM[] = [];
            v.icon.forEach((v, i)=> {
                shareImages.push(<div className="share-img" key={i} style={{backgroundImage: 'url(' + v + ')'}}></div>);
            });
            shares.push(<section className="shares" key={index}>
                <div className="user-box">
                    <img src={v.user_icon} className="user-img"/>
                    <div className="user-info">
                        <div className="user-title">{v.user_name}</div>
                        <div className="user-text">参与<span className="num">{v.join_num}人次</span> 幸运号码<span
                            className="luck_color">{v.luck_code}</span></div>
                    </div>
                    <div className="time">{v.time}</div>
                </div>
                <div className="share-body">
                    <div className="share-description">例我却接大几非四级或报国克矿干所热存按路更级团毛际高将确列战。</div>
                    <div className="img-box">{shareImages}</div>
                </div>
            </section>);
            shares.push(<div className="share-footer" key={index + 999}>
                <div className="add-luck">攒运气({v.luck_num})</div>
                <div className="line"/>
                <Link className="join-goods" to={`/goodsinfo/${v.sid}`}>我也要中></Link>
            </div>);
        });
        return (
            <div className="share-view">
                <LibHeader title="晒单"/>
                <article className="share-body-box">
                    {shares}
                </article>
                <LibFooter act="share"/>
            </div>
        )
    }
}
