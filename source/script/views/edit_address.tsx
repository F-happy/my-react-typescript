/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import {Link} from 'react-router';
import webApi from '../utils/web_api';
import util from '../utils/utils_box';
import LibHeader from '../components/header';
import toast from '../components/toast';
import {addressProps} from '../interface/inter_face';

export default class EditAddress extends React.Component<addressProps, any> {
    private document;

    constructor(props) {
        super(props);
        this.document = document;
    }

    componentDidMount() {
        this.document.querySelector('html').style.background = '#eee';
        let {type} = this.props.params;
    }

    render() {
        return (
            <article className="edit-address-list">
                <LibHeader title="编辑地址" toLeft={'goBack'}/>
                {/*<section className="edit-body">*/}
                {/*<div className="edit-title">手机号码</div>*/}
                {/*<input type="number" className="virtual-input" value={'18642636963'} placeholder="请输入手机号码"/>*/}
                {/*</section>*/}
                {/*<section className="edit-body">*/}
                {/*<div className="edit-title">QQ号码</div>*/}
                {/*<input type="number" className="virtual-input" placeholder="请输入QQ号码"/>*/}
                {/*</section>*/}

                <section className="edit-body">
                    <div className="edit-title">收货人</div>
                    <input type="text" className="virtual-input" placeholder="请输入收货人姓名"/>
                </section>
                <section className="edit-body">
                    <div className="edit-title">联系方式</div>
                    <input type="number" className="virtual-input" placeholder="请输入手机号码"/>
                </section>
                <section className="edit-body">
                    <div className="edit-title">地区</div>
                    <input type="text" className="virtual-input" placeholder="请选择"/>
                </section>
                <section className="edit-body">
                    <div className="edit-title">详细地址</div>
                    <input type="text" className="virtual-input" placeholder="请填写详细地址"/>
                </section>

                <p className="text">(充值号码填写用于手机话费、Q等虚拟商品中奖后的充值,最多添加1个)</p>
                <button className="save-btn">保存</button>
                <button className="delete-btn">删除</button>
            </article>
        )
    }
}
