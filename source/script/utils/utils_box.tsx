/**
 * Created by fuhuixiang on 16-8-23.
 */
import apiUtils from '../utils/web_api';

class Utils {
    private _ua: string;
    // 构造函数
    constructor() {
        this._ua = navigator.userAgent;
    }

    /**
     * Created by fuhuixiang on 16-5-26.
     * @desc    获取url中search部分的值
     * @return  string
     * @param   key
     */
    getURL(key: string): string {
        let results = new RegExp(key.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]") + "=([^&#]*)").exec(window.location.hash.substr(1));
        return (results) ? (results[1]) : '';
    }

    /**
     * 判断当前设备平台
     */
    isDriver(): string {
        if (/android/i.test(this._ua)) {
            return 'android';
        } else if (/like Mac/i.test(this._ua)) {
            return 'ios';
        } else {
            return 'bower';
        }
    }

    /**
     * 当用户在客户端外打开时触发的事件
     */
    downLoadClient(): void {
        alert('此页面请在客户端内打开~');
        window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.quickarrow.xuyuan';
    }

    /**
     * 格式化时间戳
     * @param time
     * @returns {string}
     */
    formatDate(time: number): string {
        let date   = new Date(time * 1000),
            _hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`,
            _min   = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`,
            _sec   = date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`,
            _day   = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`,
            _month = (date.getMonth() + 1) > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
        return `${date.getFullYear()}-${_month}-${_day} ${_hours}:${_min}:${_sec}`;
    }

    addQQ(): void {
        location.href = 'http://shang.qq.com/wpa/qunwpa?idkey=17c3198213b3143c197e616f82402dd42052dc2dbbf4aaa6615a811890a95eb0';
        return null;
    }

    addShopCart(sid: number, buy: number = 5): boolean {
        apiUtils.getApi('shopcat/putcart', {sid: sid, uid: this.getCookie('uid'), buy: buy}, (data)=> {
            return data.c == 0;
        });
        return false;
    }

    removeShopCart(sid: number): boolean {
        apiUtils.getApi('shopcat/delcart', {sid: sid, uid: this.getCookie('uid')}, (data)=> {
            return data.c == 0;
        });
        return false;
    }

    setCookie(name: string, value: string, hours: number = 1): any {
        let nowTime: any = Date.now();
        let exp: any = new Date(nowTime + (nowTime.getTimezoneOffset() * 60000) + (3600000 * 8));
        exp.setTime(exp.getTime() + hours * 60 * 60 * 1000);
        return document.cookie = name + "=" + value + ";path=/;expires=" + exp.toGMTString() + ";";
    }

    getCookie(name): string {
        let arr: any = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        return arr !== null ? arr[2] : '';
    }
}
export default new Utils();
