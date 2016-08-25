/**
 * Created by fuhuixiang on 16-7-20.
 */
'use strict';

const webpack           = require('webpack'),
      path              = require('path'),
      autoprefixer      = require('autoprefixer'),
      precss            = require('precss'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (options)=> {

    // 根据传入的参数来进行后续操作的配置
    let outPath = {
        'CDN': options.CDNPath,
        'root': '/static/' + (options.build ? (options.version + '/') : ''),
        'css': options.cssPath + '/',
        'font': options.fontPath + '/',
        'image': options.imagesPath + '/',
        'js': options.jsPath + '/'
    };

    let entrys = [
        path.resolve(__dirname, options.mainJsPath)
    ];

    if (options.hotServer) {
        entrys.push('webpack/hot/only-dev-server');
    }
    // 这个为webpack的过滤器数组, 在这里将会配置过滤器的信息
    let loader = [
        {
            // js过滤器, 将ES6风格的reacts代码编译成正常浏览器识别的ES5代码
            test: /\.tsx$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        },
        {
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            // SCSS过滤器会将SCSS样式导出为独立的css文件而不是react风格的行内样式
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
        },
        {
            // 图片过滤器会将小于4k的文件直接以data数据的形式写在样式中, 而其他的文件才会正常引入
            test: /\.(jpg|png)$/,
            loader: 'url-loader?limit=4096&name=' + outPath.root + outPath.image + '[name].[ext]'
        },
        {
            test: /\.woff$/,
            loader: 'file-loader?name=' + outPath.root + outPath.font + '[name].[ext]'
        },
        {
            test: /\.html$/,
            loader: 'file-loader?name=[name].[ext]'
        }
    ];

    let _plugins = [

        // 将行内样式打包成独立css文件的插件
        new ExtractTextPlugin(outPath.root + outPath.css + options.outStyleName,
            {allChunks: true}
        ),

        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin()];

    // 判断如果当前需要进行编译则添加替换CDN地址的过滤器
    if (options.build) {
        loader.push({
            test: /\.html$/,
            loader: 'string-replace',
            query: {
                multiple: [
                    {search: 'static/css/', replace: outPath.CDN + outPath.root},
                    {search: 'static/js/', replace: outPath.CDN + outPath.root}
                ]
            }
        });
        // react的编译插件, 这样在打包的时候就是引入的react.min
        _plugins.push(
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify("production")
                }
            }));
        _plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                output: {comments: false}
            })
        )
    }

    return {
        entry: entrys,
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: outPath.root + outPath.js + options.outJsName,
            publicPath: options.build ? outPath.CDN : ''
        },
        module: {
            loaders: loader
        },
        resolve: {
            extensions: ['', '.js', ".ts", ".tsx", '.json']
        },
        postcss: function () {
            return {
                defaults: [autoprefixer, precss],
                cleaner: [autoprefixer({browsers: []})]
            };
        },
        plugins: _plugins
    }
};
