var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
      App: './app/assets/scripts/App.js',
      Vendor: './app/assets/scripts/Vendor.js'
    },
    output: {
        path: path.resolve(__dirname, './app/temp/scripts'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
