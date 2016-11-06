/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import {Link} from 'react-router';
import webApi from '../utils/web_api';
import util from '../utils/utils_box';
import LibHeader from '../components/header';

export default class TypeList extends React.Component<any, any> {
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
            <article className="type-list-view">
                <LibHeader title="热门分类" toLeft={'goBack'}/>
                <section className="type-lists">
                    <Link to={`/goods_module/${'apple'}`}>
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="type-img"/>
                        <span>苹果专区</span>
                    </Link>
                    <Link to={`/goods_module/${'apple'}`}>
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="type-img"/>
                        <span>小米专区</span>
                    </Link>
                    <Link to={`/goods_module/${'apple'}`}>
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="type-img"/>
                        <span>潮流数码</span>
                    </Link>
                    <Link to={`/goods_module/${'apple'}`}>
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="type-img"/>
                        <span>家用电器</span>
                    </Link>
                    <Link to={`/goods_module/${'apple'}`}>
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="type-img"/>
                        <span>零食天地</span>
                    </Link>
                    <Link to={`/goods_module/${'apple'}`}>
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="type-img"/>
                        <span>生活日用</span>
                    </Link>
                    <Link to={`/goods_module/${'apple'}`}>
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="type-img"/>
                        <span>虚拟充值</span>
                    </Link>
                    <Link to={`/goods_module/${'apple'}`}>
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="type-img"/>
                        <span>其他商品</span>
                    </Link>
                </section>
            </article>
        )
    }
}
