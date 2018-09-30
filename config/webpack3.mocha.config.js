const fs = require('fs');
const webpack = require('webpack');
const path = require('path');


// tell webpack to leave node_modules alone
// http://jlongster.com/Backend-Apps-with-Webpack--Part-I
const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(x => !/\.bin|eos-focus-manager|react-universal-component|require-universal-module|webpack-flush-chunks/.test(x))
  .forEach((mod) => (nodeModules[mod] = `commonjs ${mod}`));

// // add any that don't fit the above pattern
// nodeModules['react-dom/server'] = 'commonjs react-dom/server';
// nodeModules['isomorphic-cookie'] = 'commonjs isomorphic-cookie';
// nodeModules['mercury-sdk-js'] = 'commonjs mercury-sdk-js';


module.exports = {
    mode: 'development',
    target: 'node',
    /* for debugging purposes
    devtool: 'inline-source-map',
    output: {
        // use absolute paths in sourcemaps (important for debugging via IDE)
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
        },
    */
    externals: [
        // nodeExternals(),
        nodeModules,
    ],
    plugins: [],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                // include: [
                //     path.resolve(__dirname, '../', 'client'),
                //     // path.resolve(__dirname, '../', 'node_modules'),
                // ],
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
        modules: [
            'client',
            'node_modules',
        ],
        extensions: ['.json', '.ts', '.tsx', '.js'],
        // alias: {
        //     Link: 'redux-first-router-link',
        // },
    },
    node: {
        __dirname: true,
        fs: 'empty',
    },
};
