/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import {Link} from 'react-router';
import LibHeader from '../components/header';
import LibFooter from '../components/footer';
import webApi from '../utils/web_api';
import util from '../utils/utils_box';
import toast from '../components/toast';
import ReactSwipe from '../components/swipe';
import Scroll from '../components/scroll_dom';
import {BannerProps, GoodListProps} from '../interface/inter_face';
import {bannerType, goodType} from '../interface/data_type';

export class Home extends React.Component<any, any> {

    public document: any;
    private webApi: any;

    constructor(props) {
        super(props);
        this.state = {
            goodLists: [],
            goodNext: true,
            bannersLists: [],
            active: 0,
            items: ['最热', '最快', '最新', '高价', '低价']
        };
        this.webApi = webApi;
        this.document = document.querySelector('html');
    }

    componentDidMount() {
        this.document.style.background = '#fff';
        this.loadBanners();
        this.loadGoodInfo(this.state.active, 1);
    }

    loadBanners(): void {
        this.webApi.getApi('banner', {}, (data)=> {
            this.setState({
                'bannersLists': data.img_list
            });
        });
    }

    loadGoodInfo(type: number, index?: number): void {
        if (index != 1) {
            this.setState({goodNext: false});
        }
        this.webApi.getApi('goods', {type: type}, (data)=> {
            let oldList: any[] = this.state.goodLists;
            this.setState({
                'goodLists': oldList.concat(data.good_lists)
            });
        });
    }

    handleSwitch(index: number): void {
        this.setState({active: index});
        this.loadGoodInfo(index, 1);
    }

    render() {
        return (
            <article className="home-view">
                <LibHeader title="许愿夺宝" toLeft="search" toRight="message"/>
                <Banner bannerLists={this.state.bannersLists}/>
                <section className="controller-list">
                    <Link to="/pk_view" className="box">
                        <div className="controller-img pk-img"></div>
                        <p className="controller-title">PK专区</p>
                    </Link>
                    <Link to="/csc" className="box">
                        <div className="controller-img about-img"></div>
                        <p className="controller-title">客服中心</p>
                    </Link>
                    <Link to="/public_view/helpframe" className="box">
                        <div className="controller-img formula-img"></div>
                        <p className="controller-title">公式详解</p>
                    </Link>
                    <div className="box">
                        <div className="controller-img service-img"></div>
                        <p className="controller-title">运营活动</p>
                    </div>
                </section>
                <ul className="rank-controller">
                    {
                        this.state.items.map((v, index)=> {
                            return <li className={`rank-result${(this.state.active == index) ? ' active' : ''}`}
                                       key={index}
                                       onClick={this.handleSwitch.bind(this, index)}>{v}</li>
                        })
                    }
                </ul>
                <GoodList goodLists={this.state.goodLists}/>
                <Scroll showHandle={()=>{this.loadGoodInfo(this.state.active)}} listen={this.state.goodNext}/>
                <LibFooter/>
            </article>
        )
    }
}

class Banner extends React.Component<BannerProps, any> {
    constructor(props) {
        super(props);
    }

    render() {
        let bannerList: React.ReactDOM[] = [];
        this.props.bannerLists.forEach((value: bannerType, index)=> {
            bannerList.push(
                <Link key={index} to={'/detail_info/' + value.url}>
                    <img className="banner-img" src={value.img}/>
                </Link>
            );
        });
        return (
            <ReactSwipe imgLists={bannerList}/>
        );
    }
}

class GoodList extends React.Component<GoodListProps, any> {
    constructor(props) {
        super(props);
    }

    handleAddShopCart(sid: number): void {
        if (util.addShopCart(sid, 5)) {
            toast.print('添加购物车成功!');
        } else {
            toast.print('添加购物车失败!');
        }
    }

    render() {
        let _goodList: React.ReactDOM[] = [];
        this.props.goodLists.forEach((value: goodType, index)=> {
            _goodList.push(
                <section className="good" key={index}>
                    <Link to={'/goods_info/' + value.sid}>
                        <img className="good-icon" src={value.icon} alt={value.description}/>
                        <h2 className="good-title">{value.title}</h2>
                        <div className="good-content">
                            <p className="good-total">总需{value.total}</p>
                            <p className="progress">
                                <span className="progress-new"
                                      style={{width: (value.remain / value.total) * 100 + '%'}}/>
                            </p>
                            <p className="good-remain">剩余
                                <span className="color-active">{value.remain}</span>
                            </p>
                        </div>
                    </Link>
                    <button className="icon-add-shop"
                            onClick={this.handleAddShopCart.bind(this, value.sid)}
                            dangerouslySetInnerHTML={{__html: '&#xe622;'}}/>
                </section>
            )
        });
        return (
            <article className="good-lists">
                {_goodList}
            </article>
        );
    }
}
