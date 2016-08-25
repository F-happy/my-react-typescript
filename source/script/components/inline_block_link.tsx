/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import {Link} from 'react-router';
import {inlineLinkProps} from '../interface/inter_face';

export default class inLineBlockLink extends React.Component<inlineLinkProps, any> {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {}

    render() {
        let {toContent, toLink, icon} = this.props;
        return (
            <Link to={`/${toLink}/`} className="inline-block-components">
                {!!icon ? <i className="left-icon" dangerouslySetInnerHTML={{__html: icon}}/> : ''}
                <span className="list-content">{toContent}</span>
                <i className="right-icon" dangerouslySetInnerHTML={{__html: '&#xe607;'}}/>
            </Link>
        )
    }
}
