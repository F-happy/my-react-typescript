/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import {Link} from 'react-router';
import {footerProps} from '../interface/inter_face';
import {footerType} from '../interface/data_type';

export default class LibFooter extends React.Component<footerProps, any> {
    constructor(props) {
        super(props);
        this.state = {
            icon: [
                {className: '&#xe60d;', act: false, name: '首页', link: 'home'},
                {className: '&#xe603;', act: false, name: '最新揭晓', link: 'published'},
                {className: '&#xe61d;', act: false, name: '晒单', link: 'share_view'},
                {className: '&#xe60b;', act: false, name: '清单', link: 'shop_cart'},
                {className: '&#xe619;', act: false, name: '我的', link: 'me'}
            ]
        }
    }

    componentDidMount() {
        let act: string             = this.props.act,
            iconArray: footerType[] = this.state.icon;
        switch (act) {
            case 'home':
                iconArray[0].act = true;
                break;
            case 'publish':
                iconArray[1].act = true;
                break;
            case 'share':
                iconArray[2].act = true;
                break;
            case 'list':
                iconArray[3].act = true;
                break;
            case 'me':
                iconArray[4].act = true;
                break;
            default :
                iconArray[0].act = true;
                break;
        }
        this.setState({
            icon: iconArray
        });
    }

    render() {
        let iconDom: React.ReactNode[] = [];
        this.state.icon.forEach((v, i)=> {
            iconDom.push(
                <div className={`footer-box${(v.act) ? ' main-color' : ''}`} key={i}>
                    <Link to={`/${v.link}/`}>
                        <i className='footer-icon' dangerouslySetInnerHTML={{__html: v.className}}/>{v.name}
                    </Link>
                </div>
            );
        });
        return (
            <footer className="footer-components">
                {iconDom}
            </footer>
        )
    }
}
