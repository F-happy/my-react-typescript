/**
 * Created by fuhuixiang on 16-6-30.
 */
'use strict';

let api = require('superagent');

module.exports = (req, resq)=>{
    api.get('http://api.wishbao.com/caldetail/info')
    // .withCredentials()
        .query({sid: req.query.sid})
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .end((err, res) => {
            if (err || !res.ok) {
                resq.send(err.toString());
            } else {
                resq.send(JSON.parse(res.text));
            }
        });
};
