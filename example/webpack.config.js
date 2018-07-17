const Path = require('path');

module.exports = {
    context: __dirname,
    entry: [
        './test.js'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    resolveLoader: {
        modules: ['node_modules', '../']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'styleable-loader?appendedSpecificity=.xyz123&fileNameRegex=.*.scss$',
                    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    mode: 'development'
};