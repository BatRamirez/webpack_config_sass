var webpack = require('webpack'),
    path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    debug: true,
    entry: {
        main: './index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.es6.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]
};
