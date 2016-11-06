/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import webApi from '../utils/web_api';
import util from '../utils/utils_box';
import LibHeader from '../components/header';
import {OrderProps} from '../interface/inter_face';
import toast from '../components/toast';

export default class PushOrder extends React.Component<OrderProps, any> {
    private document;

    constructor(props) {
        super(props);
        this.document = document;
    }

    componentDidMount() {
        this.document.querySelector('html').style.background = '#eee';
        let {sid} = this.props.params;
    }

    render() {
        return (
            <article className="push-order-view">
                <LibHeader title="发布晒单" toLeft={'goBack'}/>
                <section className="push-header">
                    <section className="input-content">
                        <textarea className="user-input" id="userInput"
                                  placeholder="丰富的图文晒单更能增长好运哦~（晒单由工作人员审核通过，文字建议不少于30字，图片建议拍实物）"/>
                    </section>
                    <section className="image-box">
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="push-img"/>
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="push-img"/>
                        <div className="push-btn" dangerouslySetInnerHTML={{__html: '&#xe617;'}}/>
                    </section>
                </section>
                <button className="push-save-btn">确认</button>
            </article>
        )
    }
}
