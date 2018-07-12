const Path = require('path');
const CssTree = require('css-tree');

module.exports = function (source) {
    const fileName = Path.basename(this.resourcePath);

    if (!fileName.endsWith('custom.styles.scss')) {
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
            node.prelude.value += ':not(false)';
        }
    });

    const resultWithHigherSpecifity = CssTree.generate(ast);
    console.log(resultWithHigherSpecifity);
};