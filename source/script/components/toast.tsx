/**
 * Created by fuhuixiang on 16-8-23.
 */
class Toast {
    private toast: Element;
    private timeOut: number;

    constructor() {
        this.toast = document.createElement('div');
        this.timeOut = 0;
    }

    render(message: string = '欢迎来到许愿夺宝'): void {
        this.toast.innerHTML = `<section class="message-box">${message}</section>`;
        this.toast.className = 'toast-view toast-anim-down';
        document.body.appendChild(this.toast);
    }

    print(msg: string): void {
        this.render(msg);
        this.timeOut = setTimeout(()=> {
            window.clearTimeout(this.timeOut);
            document.body.removeChild(this.toast);
        }, 1500);
    }
}
export default new Toast();
