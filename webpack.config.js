const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: ['./src/app/app.tsx'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ],
    }
}