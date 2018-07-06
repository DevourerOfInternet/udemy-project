var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        path: path.resolve(__dirname, './app/temp/scripts'),
        filename: 'App.js'
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
