/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import {Link, hashHistory} from 'react-router';
import LibHeader from '../components/header';
import LibFooter from '../components/footer';
import toast from '../components/toast';
import webApi from '../utils/web_api';
import util from '../utils/utils_box';
import {shopCartType, goodType} from '../interface/data_type';

export default class ShopCart extends React.Component<any, any> {
    private webApi;
    private document;

    constructor(prop) {
        super(prop);
        this.state = {
            myCart: [],
            youLike: [],
            total: 0
        };
        this.webApi = webApi;
        this.document = document;
    }

    handleDelete(sid: number, gid: number): void {
        if (util.removeShopCart(sid)) {
            toast.print('删除购物车成功!');
            let myCartArray: shopCartType[] = this.state.myCart;
            myCartArray = myCartArray.filter((v)=> {
                return v.key != gid;
            });
            this.setState({myCart: myCartArray});
        } else {
            toast.print('删除购物车失败!');
        }
    }

    componentDidMount() {
        this.document.querySelector('html').style.background = '#fff';
        this.loadMyCart();
    }

    loadMyCart() {
        this.webApi.getApi('shopcat/mycart', '', (data: shopCartType[])=> {
            let shopCart: React.ReactDOM[] = [];
            if (data.length > 0) {
                let _total: number = 0;
                data.forEach((v: shopCartType)=> {
                    _total += 5;
                    shopCart.push(
                        <section className="shop-good" key={v.gid}>
                            <div className="good-title">
                                <span className="text">(第{v.period}期){v.title}</span>
                                <span className="good-del"
                                      onClick={this.handleDelete.bind(this, v.sid, v.gid)}>删除</span>
                            </div>
                            <div className="good-body">
                                <div className="shop-img"><img src={v.icon}/></div>
                                <div className="shop-info">
                                    <div className="shop-info-title">
                                        <span className="title-text">总需{v.total}人次</span>
                                        <span className="title-text">剩余 <span
                                            className="main-color">{v.total - v.purchase}</span> 人次</span>
                                    </div>
                                    <div className="shop-num">
                                        <button className="shop-minus-box">-</button>
                                        <div className="shop-input">
                                            <input type="number" value={5}/>
                                        </div>
                                        <button className="shop-add-box">+</button>
                                    </div>
                                    <div className="shop-message main-color">{v.notice}</div>
                                </div>
                                <button className="shop-join-btn">包尾</button>
                            </div>
                        </section>
                    )
                });
                this.setState({myCart: shopCart, total: _total});
            }
            this.isNoneView();
        });
    }

    isNoneView() {
        this.webApi.getApi('shopcat/youlike', '', (data: goodType[])=> {
            let youLikeView: React.ReactDOM[] = [];
            data.forEach((v)=> {
                youLikeView.push(
                    <div className="like-good" key={v.total}>
                        <Link to={`/goods_info/${v.sid}`}>
                            <div className="good-img" style={{backgroundImage: `url(${v.icon})`}}></div>
                        </Link>
                        <div className="good-name">{v.title}</div>
                        <div className="progress">
                            <span className="progress-new" style={{width: `${(v.remain / v.total) * 100}%`}}/>
                        </div>
                    </div>
                )
            });
            this.setState({youLike: youLikeView});
        });
    }

    goShop() {
        hashHistory.push('/pay_view');
    }

    render() {
        let shopTemp: React.ReactDOM[] = [];
        if (this.state.myCart.length != 0) {
            shopTemp.push(
                <article className="shop-lists" key={11}>
                    {this.state.myCart}
                </article>
            );
            shopTemp.push(
                <article className="add-shop-banner" key={22}>
                    <section className="shop-total">
                        <div>总计: {this.state.total} 夺宝币</div>
                        <div className="shop-good-num">共{this.state.myCart.length}件商品</div>
                    </section>
                    <button className="go-shop" onClick={this.goShop.bind(this)}>去结算></button>
                </article>
            );
        } else {
            shopTemp.push(
                <section className="none-shop" key={1}>
                    <div className="none-cart"/>
                    <div className="none-title">购物车空空如也~</div>
                    <Link to={'/home/'} className="shop-btn">逛一逛</Link>
                </section>
            );
            shopTemp.push(
                <section className="you-like" key={2}>
                    <div className="like-title">
                        <i className="you-love-icon"/>
                        猜你喜欢
                    </div>
                    <div className="like-goods">
                        {this.state.youLike}
                    </div>
                </section>
            )
        }
        return (
            <div className="shop-cart-view">
                <LibHeader title="购物车"/>
                {shopTemp}
                <LibFooter act="list"/>
            </div>
        )
    }
}
