/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import { Link } from 'react-router';
import webApi from '../utils/web_api';
import util from '../utils/utils_box';
import LibHeader from '../components/header';
import toast from '../components/toast';

export default class MyInfo extends React.Component<any, any> {
    private document;
    constructor(props){
        super(props);
        this.document = document;
    }

    componentDidMount() {
        this.document.querySelector('html').style.background = '#eee';
    }

    render(){
        return (
            <article className="my-info-view">
                <LibHeader title="个人信息" toLeft={'goBack'}/>
                <section className="user-img-box">
                    <div>头像</div>
                    <div className="right-box">
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="user-img"/>
                        <i dangerouslySetInnerHTML={{__html: '&#xe607;'}}/>
                    </div>
                </section>
                <section className="user-name-box">
                    <div>昵称</div>
                    <div className="right-box">
                        <div className="my-name">叫什么好呢</div>
                        <i dangerouslySetInnerHTML={{__html: '&#xe607;'}}/>
                    </div>
                </section>
                <section className="my-money-box">
                    <div>我的多宝币</div>
                    <div className="right-box">
                        <div className="main-color">100</div>
                        <i dangerouslySetInnerHTML={{__html: '&#xe607;'}}/>
                    </div>
                </section>
            </article>
        )
    }
}
