/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import LibHeader from '../components/header';
import globData from '../utils/global_data';
import {frameProps} from '../interface/inter_face';

export default class publicView extends React.Component<frameProps, any> {
    constructor(props) {
        super(props);
        this.state = {
            src: '#home',
            title: '许愿夺宝'
        }
    }

    componentDidMount() {
        let frameName: string = this.props.params.frame;
        if (!!globData[frameName]) {
            this.setState({
                src: globData[frameName].src,
                title: globData[frameName].name
            });
        }
    }

    render() {
        return (
            <article style={{marginTop: '2.5rem'}}>
                <LibHeader title={this.state.title} toLeft={'goBack'}/>
                <iframe src={this.state.src} frameborder="0"
                        style={{padding: 0, width: '100%', height: '1000px', border: 'none'}}></iframe>
            </article>
        )
    }
}
