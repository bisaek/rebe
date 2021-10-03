# rebe

> connect react to a server

[![NPM](https://img.shields.io/npm/v/rebe.svg)](https://www.npmjs.com/package/rebe) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

npm

```bash
npm install --save rebe
```

yarn

```bach
yarn add rebe
```

## Usage

```jsx
import React, { Component } from 'react'

import { Get, Post, config } from 'rebe'
import 'rebe/dist/index.css'

config({
  sites: [
    'http://localhost:8080',
    'http://localhost:3000',
    'https://google.com'
  ]
})

class Example extends Component {
  render() {
    return <Get url='/Example' />
  }
}
```

## License

[MIT](https://github.com/bisaek/rebe/blob/main/LICENSE) ©
[bisaek](https://github.com/bisaek)
