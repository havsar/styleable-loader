const Path = require('path');

module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path: Path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolveLoader: {
        modules: ['node_modules', './']
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'styleable-loader',
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