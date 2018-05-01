const test = require('ava')
const execa = require('execa')

const mdxfmt = require('..')

test('it formats an MDX file', async t => {
  const { stdout } = await execa('./cli.js', ['test/fixture.md'])

  t.snapshot(stdout)
})

test('it outputs a help menu', async t => {
  const { stdout } = await execa('./cli.js', ['help'])

  t.snapshot(stdout)
})
