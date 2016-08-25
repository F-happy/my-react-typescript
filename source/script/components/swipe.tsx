/**
 * Created by fuhuixiang on 16-8-23.
 */
import * as React from "react";

interface SwipeProps {
    imgLists: React.ReactNode[];
}

export default class ReactSwipe extends React.Component<SwipeProps, any> {
    private startX: number;
    private req: number;
    private startStateX: number;

    constructor(props) {
        super(props);
        this.state = {
            touchX: 0
        };
        this.startX = 0;
    }

    // componentDidMount(){}

    swipeMove(e) {
        // debugger
        let endX: number = e.touches[0].pageX;
        this.setState({touchX: (this.startX - endX) / 32});
    }

    swipeStart(e) {
        this.startX = e.touches[0].pageX + this.state.touchX * 32;
        this.startStateX = this.state.touchX * 32;
    }

    swipeEnd(e) {
        // debugger
        let end: number = this.state.touchX;
        console.log(end);
        if (end > 0) {
            if ((end % 20) < 10) {
                this.req = window.requestAnimationFrame(this.animSwiperRight.bind(this));
            } else {
                this.req = window.requestAnimationFrame(this.animSwiperLeft.bind(this));
            }
        } else {
            if ((Math.abs(end) % 20) < 10) {
                this.req = window.requestAnimationFrame(this.animSwiperLeftBack.bind(this));
            } else {
                this.req = window.requestAnimationFrame(this.animSwiperRightBack.bind(this));
            }
        }
    }

    animSwiperRight() {
        let clientX: number = this.state.touchX * 32;
        clientX -= 200 / 32;
        if (clientX <= this.startStateX) {
            this.setState({touchX: Math.floor(this.state.touchX)});
            window.cancelAnimationFrame(this.req);
        } else {
            this.setState({touchX: (clientX / 32)});
            this.req = window.requestAnimationFrame(this.animSwiperRight.bind(this));
        }
    }

    animSwiperLeft() {
        let clientX: number = this.state.touchX * 32;
        clientX += 200 / 32;
        if (clientX > (this.startStateX + 640) && clientX > 640) {
            this.setState({touchX: Math.floor(this.state.touchX) + 1});
            window.cancelAnimationFrame(this.req);
        } else {
            this.setState({touchX: (clientX / 32)});
            this.req = window.requestAnimationFrame(this.animSwiperLeft.bind(this));
        }
    }

    animSwiperLeftBack(){
        let clientX: number = this.state.touchX * 32;
        clientX += 200 / 32;
        if (clientX <= this.startStateX) {
            this.setState({touchX: Math.floor(this.state.touchX) + 1});
            window.cancelAnimationFrame(this.req);
        } else {
            this.setState({touchX: (clientX / 32)});
            this.req = window.requestAnimationFrame(this.animSwiperLeft.bind(this));
        }
    }

    animSwiperRightBack(){
        let clientX: number = this.state.touchX * 32;
        clientX -= 200 / 32;
        if (clientX > (this.startStateX + 640) && clientX > 640) {
            this.setState({touchX: Math.floor(this.state.touchX)});
            window.cancelAnimationFrame(this.req);
        } else {
            this.setState({touchX: (clientX / 32)});
            this.req = window.requestAnimationFrame(this.animSwiperRight.bind(this));
        }
    }

    render() {
        let imgList: React.ReactNode[] = [];
        this.props.imgLists.forEach((value, index)=> {
            imgList.push(
                <div key={index} className="swipe-box" style={{
                    transform: `translateX(-${this.state.touchX}rem)`
                }}>
                    {value}
                </div>
            );
        });
        return (
            <section className="swipe-components" onTouchMove={this.swipeMove.bind(this)}
                     onTouchStart={this.swipeStart.bind(this)} onTouchEnd={this.swipeEnd.bind(this)}>
                {imgList}
            </section>
        );
    }
}
