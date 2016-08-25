/**
 * Created by fuhuixiang on 16-8-24.
 */
import * as React from "react";
import {findDOMNode} from "react-dom";
import {scrollProps} from '../interface/inter_face'

export default class ScrollDom extends React.Component<scrollProps, any> {

    constructor(props) {
        super(props);
    }
    refs: {
        [string: string]: any;
        scroll: Element;
    };
    componentDidMount() {
        let scroll: Element = findDOMNode(this.refs.scroll);
        window.onscroll = ()=> {
            let scrollHeight: number = window.screen.height - scroll.getBoundingClientRect().top;
            if (scrollHeight > 0 && this.props.listen){
                this.props.showHandle();
            }
        }
    }

    render() {
        return (
            <div ref="scroll"></div>
        )
    }
}
