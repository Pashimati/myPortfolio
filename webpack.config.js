const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test:/\.(s*)css$/,
            use: [
                miniCss.loader,
                {
                    loader: 'css-loader',
                    options: {
                        url: false,
                        sourceMap: true
                    },
                },
                'sass-loader',
            ]
        }]
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/img'),
                    to: 'img',
                },
                {
                    from: path.resolve(__dirname, 'src/index.html'),
                    to: '.',
                },
                {
                    from: path.resolve(__dirname, 'src/assets'),
                    to: 'assets',
                },
            ],
        }),
    ]
};