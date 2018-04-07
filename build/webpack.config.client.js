const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const config = {
  target: 'node',//执行环境
  entry:{
    app: path.join(__dirname,'../client/app.js')
  },
  output:{
    filename:'[name].[hash].js',
    path: path.join(__dirname,'../dist'),
    publicPath:'/public',
  },
  module:{
    rules:[
      {
        test: /.jsx$/,
        loader:'babel-loader'
      },
      {
        test: /.js$/,
        loader:'babel-loader',
        exclude:[
          path.join(__dirname,'../node_modules/')
        ]
      }
    ]
  },
  plugins:[
    new HTMLPlugin({
      template: path.join(__dirname,'../client/template.html')
    })
  ]
}

if(isDev){
  config.devServer = {
    host: '0.0.0.0',
    port: '8888',
    contentBase: path.join(__dirname,'../dist'),
    hot: true,
    overlay:{
      errors: true
    }
  }
}

module.exports = config;
