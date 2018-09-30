const path = require('path');
const webpack = require('webpack');

const outputPath = path.resolve(__dirname, '../build');

module.exports = {
    entry: path.resolve(__dirname, '../client/index.tsx'),
    output: {
        path: outputPath,
        filename: 'bundle.js',
    },
    mode: 'development',
    module: {
        rules: [
            // https://github.com/styled-components/babel-plugin-styled-components
            {
                test: /\.(ts|tsx)?$/,
                use: [{
                    loader: 'awesome-typescript-loader',
                    options: {
                        configFileName: path.resolve(__dirname, '../tsconfig.json'),
                    },
                }],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        contentBase: outputPath,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
};