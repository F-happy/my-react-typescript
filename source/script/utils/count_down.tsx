/**
 * Created by fuhuixiang on 16-8-23.
 */

class CountDown {
    private document: Element;

    constructor() {
        this.document = document.querySelector('#time1');
    }

    /**
     * 小时级倒计时动画
     * @private
     */
    timeAnimation(times, callback) {
        var endingTime: number     = times,
            timeTemp: number       = (endingTime - Date.now()),
            remain_sec: number     = 0,
            remain_minute: number  = 0,
            remain_hour: number    = 0,
            timeTag: number        = Date.now(),
            hour: string           = '0',
            min: string            = '0',
            sec: string            = '0',
            remain_secTemp: number = 0,
            headTime: Element      = this.document;

        console.log('num');

        if (Date.now() > endingTime) { //  1449936000000 1469690950885
            headTime.innerHTML = '活动结束';
        } else {
            timeTemp = timeTemp / 1000;
            // 秒数
            remain_sec = timeTemp % 60;
            timeTemp = timeTemp / 60;
            // 分数
            remain_minute = timeTemp % 60;
            timeTemp = timeTemp / 60;
            // 小时数
            remain_hour = timeTemp % 24;
            timeTemp = timeTemp / 24;

            window.requestAnimationFrame(begin);
        }

        function begin(): void {
            remain_secTemp = Date.now() - timeTag;
            if (remain_secTemp >= 1000) {

                timeTemp = (endingTime - Date.now()) / 1000;
                // 秒数
                remain_sec = timeTemp % 60;
                timeTemp = timeTemp / 60;
                // 分数
                remain_minute = timeTemp % 60;
                timeTemp = timeTemp / 60;
                // 小时数
                remain_hour = timeTemp % 24;
                timeTemp = timeTemp / 24;

                if ((remain_minute <= 0) && (remain_sec <= 0) && (remain_hour <= 0)) {
                    callback();
                    return;
                }
                timeTag = Date.now();
            }
            if (remain_hour < 10) {
                hour = '0' + remain_hour;
            } else {
                hour = remain_hour.toString();
            }
            if (remain_minute < 10) {
                min = '0' + remain_minute;
            } else {
                min = remain_minute.toString();
            }
            if (remain_sec < 10) {
                sec = '0' + remain_sec;
            } else {
                sec = remain_sec.toString();
            }
            headTime.innerHTML = `${hour}:${min}:${sec}`;
            window.requestAnimationFrame(begin);
        }
    }
}
export default new CountDown();
