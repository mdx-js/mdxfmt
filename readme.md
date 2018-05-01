# mdxfmt

An experimental code formatter for [MDX][mdx].

## Installation

```
npm i -D mdxfmt
```

## Usage

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

### Options

Key | Type | Description
--- | --- | ---
`jsx` | `{}` | Options object passed to [Prettier][prettier] for formatting JSX
`md` | `{}` | Options object passedt to [Remark Stringify][remark-stringify] for formatting MD

[mdx]: https://github.com/mdx-js/mdx
[prettier]: https://prettier.io/docs/en/options.html
[stringify]: https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#options
