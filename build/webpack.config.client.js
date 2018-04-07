const path = require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base');
const webpackMerge = require('webpack-merge');

const isDev = process.env.NODE_ENV === 'development';

const config = webpackMerge(baseConfig, {
  entry:{
    app: path.join(__dirname,'../client/app.js')
  },
  output:{
    filename:'[name].[hash].js',
  },
  target: 'web',
  plugins:[
    new HTMLPlugin({
      template: path.join(__dirname,'../client/template.html')
    })
  ]
})

if(isDev){
  config.entry = {
    app:[
      'react-hot-loader/patch',
       path.join(__dirname,'../client/app.js')
    ]
  }
  config.devServer = {
    host: '0.0.0.0',
    port: '8888',
    contentBase: path.join(__dirname,'../dist'),
    hot: true,// 使用热模块更新，必须安装插件
    open : true,// 自动在启动后打开浏览器
    overlay:{
      errors: true
    },
    publicPath:'/public',//访问所有dist静态路径加路径
    historyApiFallback:{//配置对应关系
      index:'/public/index.html'//指定dist/index.html
    }
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin)
}

module.exports = config;
