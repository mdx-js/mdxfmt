#! /usr/bin/env node

const fs = require('fs')
const path = require('path')

const file = process.argv[2]

const mdxfmt = require('.')

if (!file) {
  console.log('Please provide a file')
  process.exit(1)
}

if (file === 'help') {
  console.log(`
    MDX code formatter

    Usage:
      mdxfmt file.md
      mdxfmt file.md > formatted.md
  `)

  process.exit(0)
}

let mdx
try {
  const fullPath = path.join(process.cwd(), file)
  mdx = fs.readFileSync(fullPath, 'utf8')
} catch (e) {
  console.log(`Could not read ${file}`)
  console.log(e)
  process.exit(1)
}

try {
  const formatted = mdxfmt(mdx)
  console.log(formatted)
} catch (e) {
  console.log(`Could not format ${file}`)
  console.log(e)
}
