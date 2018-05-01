# mdxfmt

An experimental code formatter for [MDX][mdx].

## Installation

Use the API:

```
npm i -D mdxfmt
```

Using the CLI:

```
npm i -g mdxfmt
```

## Usage

Using the API:

```js
const mdxfmt = require('mdxfmt')

const MDX = `
import { Box }
from 'grid-styled'

# Hello, world!

<div>
  hi   </div>
`

mdxfmt(MDX)
```

Using the CLI:

```
❯ mdxfmt help

    MDX code formatter

    Usage:
      mdxfmt file.md
      mdxfmt file.md > formatted.md
```

### Options

Key | Type | Description
--- | --- | ---
`jsx` | `{}` | Options object passed to [Prettier][prettier] for formatting JSX
`md` | `{}` | Options object passedt to [Remark Stringify][remark-stringify] for formatting MD

[mdx]: https://github.com/mdx-js/mdx
[prettier]: https://prettier.io/docs/en/options.html
[remark-stringify]: https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#options
