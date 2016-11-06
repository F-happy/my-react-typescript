/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import {Link} from 'react-router';
import LibHeader from '../components/header';
import util from '../utils/utils_box';
import LineBlock from '../components/inline_block_link';

export default class Settings extends React.Component<any, any> {
    private document;

    constructor(props) {
        super(props);
        this.document = document;
    }

    componentDidMount() {
        this.document.querySelector('html').style.background = '#eee';
    }

    render() {
        return (
            <article className="setting-view">
                <LibHeader title="设置" toLeft={'goBack'}/>
                <LineBlock toContent="帮助中心" toLink="home"/>
                <LineBlock toContent="服务协议" toLink="home"/>
                <LineBlock toContent="关于我们" toLink="home"/>
                <LineBlock toContent="夺宝认证体系" toLink="home"/>
                <button className="setting-btn">退出登录</button>
            </article>
        )
    }
}
