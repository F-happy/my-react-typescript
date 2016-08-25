/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";
import webApi from '../utils/web_api';
import LibHeader from '../components/header';
import {DetailInfoProps} from '../interface/inter_face';
import {detailType} from '../interface/data_type';

export default class DetailInfo extends React.Component<DetailInfoProps, any> {
    private webApi: any;

    constructor(props) {
        super(props);
        this.state = {
            imgArray: []
        };
        this.webApi = webApi;
    }

    componentDidMount() {
        let {gid} = this.props.params;
        if (!!gid) {
            this.webApi.getApi('goods/detail', {gid: gid}, (data: detailType)=> {
                if (data.c == 0) {
                    let detail: string[] = data.d.detail.split(',');
                    let imgArray: string[] = [];
                    detail.forEach((v)=> {
                        imgArray.push(v);
                    });
                    this.setState({
                        imgArray: imgArray
                    });
                }
            });
        }
    }

    handleReload(): void {
        window.location.reload();
    }

    render() {
        let images: React.ReactDOM[] = [];
        let errorPage: React.ReactDOM = <div className="error">
            <h1>网络不给力</h1>
            <p>点击刷新或进行网络设置</p>
            <button onClick={this.handleReload.bind(this)}>刷新</button>
        </div>;
        this.state.imgArray.forEach((v, index)=> {
            images.push(<img src={v} key={index}/>);
        });
        return (
            <div className="detail-view">
                <LibHeader title="图文详情" toLeft={'goBack'}/>
                {images.length > 0 ? images : errorPage}
            </div>
        );
    }
}
