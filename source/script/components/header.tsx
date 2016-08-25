/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import {Link, hashHistory} from 'react-router';
import {headerProps} from '../interface/inter_face';

export default class duoBaoHeader extends React.Component<headerProps, any> {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {}

    handleBack() {
        hashHistory.goBack(-1);
    }

    render() {
        let leftBtn: React.ReactNode  = <div className="header-left"/>,
            rightBtn: React.ReactNode = <div className="header-right"/>;

        const goBackBtn: React.ReactNode   = <i className="header-left" onClick={this.handleBack.bind(this)}
                                                dangerouslySetInnerHTML={{__html: '&#xe605;'}}/>,
              settingBtn: React.ReactNode  = <Link to={`/settings/`} className="header-right"
                                                   dangerouslySetInnerHTML={{__html: '&#xe61e;'}}/>,
              addBtn: React.ReactNode      = <Link to={`/edit_address/add`} className="header-right"
                                                   dangerouslySetInnerHTML={{__html: '&#xe62a;'}}/>,
              messageBtn: React.ReactNode  = <Link to={`/message_system/`} className="header-right"
                                                   dangerouslySetInnerHTML={{__html: '&#xe624;'}}/>,
              listBtn: React.ReactNode     = <Link to={`/money_list/`} className="header-right"
                                                   dangerouslySetInnerHTML={{__html: '&#xe61c;'}}/>,
              searchBtn: React.ReactNode   = <Link to={`/type_list/`} className="header-left"
                                                   dangerouslySetInnerHTML={{__html: '&#xe627;'}}/>,
              shopCartBtn: React.ReactNode = <Link to={`/shop_cart/`} className="header-right"
                                                   dangerouslySetInnerHTML={{__html: '&#xe60b;'}}/>;

        switch (this.props.toLeft) {
            case 'goBack':
                leftBtn = goBackBtn;
                break;
            case 'search':
                leftBtn = searchBtn;
                break;
            default:
                break
        }
        switch (this.props.toRight) {
            case 'setting':
                rightBtn = settingBtn;
                break;
            case 'shopCart':
                rightBtn = shopCartBtn;
                break;
            case 'add':
                rightBtn = addBtn;
                break;
            case 'message':
                rightBtn = messageBtn;
                break;
            case 'list':
                rightBtn = listBtn;
                break;
            default:
                break
        }
        return (
            <header className="header-components">
                {leftBtn}
                <div>{(!!this.props.title) ? this.props.title : '许愿夺宝'}</div>
                {rightBtn}
            </header>
        )
    }
}
