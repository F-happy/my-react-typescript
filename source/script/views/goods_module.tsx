/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import {Link} from 'react-router';
import webApi from '../utils/web_api';
import util from '../utils/utils_box';
import LibHeader from '../components/header';
import toast from '../components/toast';
import {GoodProps} from '../interface/inter_face';

export default class GoodsModule extends React.Component<GoodProps, any> {
    private document;

    constructor(props) {
        super(props);
        this.document = document;
    }

    componentDidMount() {
        this.document.querySelector('html').style.background = '#eee';
        let {type} = this.props.params;
    }

    handleAddShopCart(sid: number): void {
        if (util.addShopCart(sid, 5)) {
            toast.print('添加购物车成功!');
        } else {
            toast.print('添加购物车失败!');
        }
    }

    render() {
        return (
            <article className="goods-module-view">
                <LibHeader title="十元专区" toLeft={'goBack'} toRight="shopCart"/>
                <section className="goods-box">
                    <Link to={'/goods_info/100'}>
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="goods-img"/>
                    </Link>
                    <div className="goods-info">
                        <p className="good-name">Apple iPad Air 平板电脑</p>
                        <p className="progress">
                            <span className="progress-new" style={{width: '50%'}}/>
                        </p>
                        <p className="good-money">
                            <span className="good-total">总需:3188</span>
                            <span className="good-remain">剩余:<span className="main-color">590</span></span>
                        </p>
                    </div>
                    <button className="icon-add-shop"
                            onClick={this.handleAddShopCart.bind(this, 1)}
                            dangerouslySetInnerHTML={{__html: '&#xe622;'}}/>
                </section>
                <section className="goods-box">
                    <Link to={'/goods_info/100'}>
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="goods-img"/>
                    </Link>
                    <div className="goods-info">
                        <p className="good-name">Apple iPad Air 平板电脑</p>
                        <p className="progress">
                            <span className="progress-new" style={{width: '50%'}}/>
                        </p>
                        <p className="good-money">
                            <span>总需:3188</span>
                            <span>剩余:<span className="main-color">590</span></span>
                        </p>
                    </div>
                    <button className="icon-add-shop"
                            onClick={this.handleAddShopCart.bind(this, 1)}
                            dangerouslySetInnerHTML={{__html: '&#xe622;'}}/>
                </section>
                <section className="goods-box">
                    <Link to={'/goods_info/100'}>
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="goods-img"/>
                    </Link>
                    <div className="goods-info">
                        <p className="good-name">Apple iPad Air 平板电脑</p>
                        <p className="progress">
                            <span className="progress-new" style={{width: '50%'}}/>
                        </p>
                        <p className="good-money">
                            <span className="good-total">总需:3188</span>
                            <span className="good-remain">剩余:<span className="main-color">590</span></span>
                        </p>
                    </div>
                    <button className="icon-add-shop"
                            onClick={this.handleAddShopCart.bind(this, 1)}
                            dangerouslySetInnerHTML={{__html: '&#xe622;'}}/>
                </section>
            </article>
        )
    }
}
