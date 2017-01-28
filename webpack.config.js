var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
webpackConfig = {
    context: __dirname + '/src',
    entry: { // --inline --hot
        bundle: './js/app.js',
        styles: './sass/main.scss'
    },
    output: {
        path: __dirname + '/assets',
        filename: '[name].js',
        library: '[name]'
    },
    watch: false,
    watchOptions: {
        aggregateTimeout: 300
    },
    resolve: {
        extensions: ['', '.js']
    },
    devtool: '#cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: [/node_modules/],
                loader: "babel",
                query: {
                    presets: ['es2015', 'stage-0', 'stage-1']
                }
            },
            {test: /\.html$/, loader: "html"},
            {test: /\.json/, loader: "json"},
            { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css-loader!resolve-url!sass-loader?sourceMap')
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        host: 'localhost',
        port: 3000,
        contentBase: __dirname+'/assets',
        hot: true
    }
};
module.exports = webpackConfig;