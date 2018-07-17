const Path = require('path');
const CssTree = require('css-tree');
const LoaderUtils = require('loader-utils');

module.exports = function (source) {
    const options = {
        ...{
            appendedSpecificity: ':not(false)',
            fileNameRegex: '.*.custom.styles.scss$'
        },
        ...LoaderUtils.getOptions(this)
    };

    const fileName = Path.basename(this.resourcePath);
    if (!(new RegExp(options.fileNameRegex)).test(fileName)) {
        return source;
    }

    const cssRegex = /module\.id, "(.*)\\n/gim;
    const css = cssRegex.exec(source)[1];

    const ast = CssTree.parse(css, {
        parseRulePrelude: false
    });

    CssTree.walk(ast, {
        visit: 'Rule',
        enter: (node) => {
            node.prelude.value += options.appendedSpecificity;
        }
    });

    const cssResultWithHigherSpecificity = CssTree.generate(ast);
    const newModuleSource = source.replace(cssRegex, `module.id, "${cssResultWithHigherSpecificity}`);
    return newModuleSource;
};