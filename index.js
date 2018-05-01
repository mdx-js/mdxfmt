const unified = require('unified')
const toMDAST = require('remark-parse')
const toMDXAST = require('@mdx-js/mdxast')
const prettier = require('prettier')
const stringify = require('remark-stringify')
const squeeze = require('remark-squeeze-paragraphs')

function mdxCompilers (options) {
  const prettierOptions = Object.assign({}, {
    singleQuote: true,
    semi: false
  }, options)

  this.Compiler.prototype.visitors.import = node =>
    prettier.format(node.value, prettierOptions)
      .replace(/\n$/, '')

  this.Compiler.prototype.visitors.export = node => {
    prettier.format(node.value, prettierOptions)
      .replace(/\n$/, '')
  }

  this.Compiler.prototype.visitors.jsx = node =>
    prettier.format(node.value, prettierOptions)
      .replace(/^;/, '') // Prettier is prefixing with a ;
}

module.exports = function (mdx, options = {}) {
  const stringifyOptions = options.md || {}
  const prettierOptions = options.jsx || {}

  const formatted = unified()
    .use(toMDAST)
    .use(toMDXAST)
    .use(stringify, stringifyOptions)
    .use(mdxCompilers, prettierOptions)
    .processSync(mdx)

  return formatted.contents
}
