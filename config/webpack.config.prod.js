const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const config = require('./../webpack.config');

/** @type {import('webpack').Compilation} */
const production = {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                test: /\.(css)$/,
            },
        ],
    },
};

module.exports = merge(config, production);
