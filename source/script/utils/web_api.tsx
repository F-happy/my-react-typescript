/**
 * Created by fuhuixiang on 16-8-23.
 */
class webApi {
    private root: string;

    // 构造函数
    constructor() {
        // this.root = 'http://192.168.0.181:3000/h5/';
        this.root = 'http://127.0.0.1:3000/h5';
    }

    /**
     * post请求
     * @param path
     * @param par
     * @param callback
     */
    // post(path, par, callback) {
    //     request.post(this.root + path)
    //         .withCredentials()
    //         .send(par)
    //         .set('Accept', 'application/json')
    //         .set('Content-Type', 'application/x-www-form-urlencoded')
    //         .end((err, res) => {
    //             if (err || !res.ok) {
    //                 callback(err.toString());
    //             } else {
    //                 callback(JSON.parse(res.text));
    //             }
    //         });
    // }

    /**
     * get请求
     * @param path
     * @param par
     * @param callback
     */
    public getApi(path: string, par: any, callback: (data)=>any) {
        let pushStr: string = '';
        for (let v in par) {
            pushStr += `&${v}=${encodeURIComponent(par[v])}`;
        }
        fetch(`${this.root}/${path}?${pushStr.substring(1)}`).then((response)=> {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
        }).then((data)=> {
            callback(data);
        }).catch((err)=> {
            console.log(err);
        });
    }
}

export default new webApi();
