[![Travis CI](https://img.shields.io/travis/havsar/styleable-loader.svg)](https://travis-ci.org/havsar/styleable-loader) 
[![David](https://img.shields.io/david/havsar/styleable-loader.svg)](https://david-dm.org/havsar/styleable-loader)
[![npm](https://img.shields.io/npm/v/styleable-loader.svg)](https://www.npmjs.org/package/styleable-loader)
[![The MIT License](https://img.shields.io/npm/l/styleable-loader.svg)](http://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/styleable-loader.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/styleable-loader/)

# styleable-loader
Webpack loader used to increase css rules specificity at build time

**_Note: This module is not ready to use yet!_**

# Install
```bash
npm i -D styleable-loader
```

# Usage

This loader is intended to work with css-loader. Make sure styleable-loader is directly used after `css-loader`.

```js
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
```

# Options

|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|`appendedSpecificity`|String|:not(false)|The selector string which is appended to every rule to increase specificity|
|`fileNameRegex`|Regex|/.*custom\\.styles\\.scss/gi|A regex to decide on which files this loade should be applied on|

# Tests
```bash
npm test
```