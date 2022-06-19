const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const { merge } = require('webpack-merge');
const config = require('./../webpack.config');

/** @type {import('webpack').Compilation} */
const development = {
    mode: 'development',
    devServer: {
        port: 3000,
        open: true,
        hot: true,
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin({ overlay: false })],
};

module.exports = merge(config, development);
