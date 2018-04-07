const path = require('path');

module.exports = {
  target: 'node',//执行环境
  entry:{
    app: path.join(__dirname,'../client/server-entry.js')
  },
  output:{
    filename:'server-entry.js',
    path: path.join(__dirname,'../dist'),
    publicPath:'/public',
    libraryTarget:'commonjs2'//打包方案amd,cmd,commonjs
  },
  module:{
    rules:[
      {
        enforce:'pre',
        test:/.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude:[
          path.join(__dirname,'../node_modules/')
        ]
      },
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
  }
}
