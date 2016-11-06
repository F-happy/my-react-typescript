/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import {Link, hashHistory} from 'react-router';
import webApi from '../utils/web_api';
import util from '../utils/utils_box';
import LibHeader from '../components/header';
import toast from '../components/toast';

export default class AddressList extends React.Component<any, any> {
    private document: any;

    constructor(props) {
        super(props);
        this.document = document;
    }

    componentDidMount() {
        this.document.querySelector('html').style.background = '#eee';
    }

    goEditView(): void {
        hashHistory.push(`/edit_address/${'add'}`);
    }

    render() {
        return (
            <article className="address-list-view">
                <LibHeader title="确认号码" toLeft={'goBack'} toRight="add"/>
                <section className="address-reality">
                    <div className="address-header">
                        <div className="header-left console-color"><i dangerouslySetInnerHTML={{__html: '&#xe602;'}}/>收货地址<span
                            className="def-tag">默认</span></div>
                        <div className="header-right" onClick={this.goEditView.bind(this)}>编辑</div>
                    </div>
                    <div className="address-body">
                        <div className="box-left">
                            <p>收货人:</p><p>联系方式:</p><p>收货地址:</p>
                        </div>
                        <div className="user-address">
                            <p>付会翔</p><p>18642636963</p><p>广州大学城广东广州大学城广东广州大学城广东</p>
                        </div>
                    </div>
                </section>
                <section className="address-virtual">
                    <div className="address-header">
                        <div className="header-left main-color"><i dangerouslySetInnerHTML={{__html: '&#xe629;'}}/>充值号码
                        </div>
                        <div className="header-right" onClick={this.goEditView.bind(this)}>编辑</div>
                    </div>
                    <div className="address-body">
                        <div className="box-left">
                            <p>手机号码:</p><p>QQ号码:</p>
                        </div>
                        <div className="user-address">
                            <p>18642636963</p><p>644612679</p>
                        </div>
                    </div>
                </section>
            </article>
        )
    }
}
