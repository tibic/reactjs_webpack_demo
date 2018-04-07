const path = require('path');
const baseConfig = require('./webpack.base');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(baseConfig, {
  target: 'node',//执行环境
  entry:{
    app: path.join(__dirname,'../client/server-entry.js')
  },
  output:{
    filename:'server-entry.js',
    path: path.join(__dirname,'../dist'),
  }
})
