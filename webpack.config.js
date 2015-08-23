var path = require('path');
var webpackConf = require('peters-toolbelt').webpack;

var HtmlWebpackPlugin = require('html-webpack-plugin');

var plugins = [];
plugins.push(new HtmlWebpackPlugin({
  filename: 'index.html',
  template: './client/index.html'
}));

var conf = new webpackConf({
                entry: path.join(__dirname, '/client/app/app.jsx'),
                output: {
                    path: path.join(__dirname, '/dist/client'),
                    filename: 'main.js'
                },
                plugins: plugins
            })
            .iNeedReact()
            .iNeedBootstrap()
            .iNeedSCSS()
            .iNeedInlineSVGs()
            .getConfig();

module.exports = conf;
