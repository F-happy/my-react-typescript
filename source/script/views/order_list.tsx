/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import {Link} from 'react-router';
import webApi from '../utils/web_api';
import util from '../utils/utils_box';
import LibHeader from '../components/header';
import toast from '../components/toast';

export default class OrderList extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            items: ['全部', '进行中', '已揭晓']
        };
    }

    // componentDidMount() {}

    handleSwitch(index: number): void {
        this.setState({active: index});
    }

    render() {
        return (
            <article className="order-list-view">
                <LibHeader title="订单记录" toLeft={'goBack'}/>
                <ul className="order-lists">
                    {
                        this.state.items.map((v, index)=> {
                            return <li className={`order-list${(this.state.active == index) ? ' active' : ''}`}
                                       key={index}
                                       onClick={this.handleSwitch.bind(this, index)}>{v}</li>
                        })
                    }
                </ul>
            </article>
        )
    }
}
