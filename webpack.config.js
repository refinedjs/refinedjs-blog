var path = require('path');
var webpack = require('webpack');
var Dotenv = require('dotenv-webpack');

var NODE_ENV = process.env.NODE_ENV || 'dev';

var defaultPlugins = [
  new Dotenv({
    path: './.env',
    safe: true
  }),
  new webpack.DefinePlugin({ // <-- key to reducing React's size
    'process.env': {
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'STAGE_ENV': JSON.stringify('STAGE'),
      'DEV_ENV': JSON.stringify('LOCAL')
    }
  })
];

var webpackPlugins = defaultPlugins;

if(NODE_ENV === 'prod' || NODE_ENV === 'stage') {
  var productionPlugins = [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }), //minify everything
    new webpack.optimize.AggressiveMergingPlugin()//Merge chunks
  ];

  webpackPlugins = defaultPlugins.concat(productionPlugins);
}

module.exports = {
  entry : [
    path.join(__dirname, '/src/index.js')
  ],
  output : {
    filename   : 'bundle.js',
    path       : path.join(__dirname, '/public'),
    publicPath : '/'
  },
  plugins : webpackPlugins,
  module : {
    rules : [{
      test : /\.html$/,
      use  : ['file-loader?name=[name].[ext]']
    },
    {
      test    : /\.js$/,
      exclude : /node_modules/,
      use     : ['babel-loader', 'eslint-loader']
    },
    {
      test    : /\.scss$/,
      use     : ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test    : /\.css$/,
      use     : ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test    : /\.(otf|eot|svg|ttf|woff|woff2|png|mp4)$/,
      use     : ['url-loader']
    }]
  }
};