let webpack = require('webpack');
let path = require('path');
let APP_PATH = path.resolve(__dirname, 'src');
let BUILD_PATH = path.resolve(__dirname, 'dist');
let plugins = [];

module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 7878,
        inline: true,
        progress: true,
        stats: {
            colors: true
        }
    },
    entry: {
        index: './src/main.js',
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }
        ]
    },
    plugins: plugins,
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
