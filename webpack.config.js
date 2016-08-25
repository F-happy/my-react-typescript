/**
 * Created by fuhuixiang on 16-7-20.
 */
'use strict';

// 这个文件为webpack的入口文件, 会将参数传给main文件.
module.exports = require("./main-webpack-config")({

    // 设置是否进行部署编译, 如果设置为true则会为所有静态资源的引用前加上CDN地址
    build: false,

    // 热启动服务器
    hotServer: true,

    // 开发项目的版本号, 如果build为true那么将会使用版本号来进行CDN的更新
    version: '0.0.1',

    // CDN的地址, 只有当build为true时才生效
    CDNPath: 'http://cdn.jonnyf.com',

    // 以下*Path字段为输出的静态资源的地址
    cssPath: 'css',
    fontPath: 'fonts',
    imagesPath: 'images',
    jsPath: 'js',
    mainJsPath: './source/script/index.tsx',

    // 以下两个为输出打包后的js和style文件名称
    outJsName: 'main.js',
    outStyleName: 'style.css'
});
