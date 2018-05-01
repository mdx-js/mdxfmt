const fs = require('fs')
const test = require('ava')

const mdxfmt = require('..')

const fixture = fs.readFileSync('test/fixture.md', 'utf8')

test('it formats an MDX file', t => {
  const result = mdxfmt(fixture)

  t.snapshot(result)
})

test('it allows jsx options to be passed', t => {
  const result = mdxfmt(fixture, {
    jsx: {
      singleQuote: false,
      semi: true
    }
  })

  t.snapshot(result)
})

test('it allows md options to be passed', t => {
  const result = mdxfmt(fixture, {
    md: {
      listItemIndent: 1
    }
  })

  t.snapshot(result)
})
