Made with React Transform Boilerplate
=====================

At the moment this app is empty. But Soon _tm_ it won't just be that.

## Demo

![](http://i.imgur.com/AhGY28T.gif)

```
git clone https://github.com/gaearon/react-transform-boilerplate.git
cd react-transform-boilerplate
npm install
npm start
open http://localhost:3000
```

## Troubleshooting

### I can’t serve images / use different HTML file / etc

This boilerplate is just a Webpack bundle served by an Express server. It’s not meant to demonstrate every feature of either project. Please consult Webpack and Express docs to learn how to serve images, or bundle them into your JavaScript application.

### I don’t see the syntax error overlay!

Make sure your react-app is not attached to `document.body` as the client overlay provided by [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) will render into `document.body`.
Attaching the React root node to `document.body` requires extra caution, as many third-party packages will append their markup to the body as well. React will replace the entire contents in the body on every re-render. Thus you will not see the additional markup.

It’s always better to render your React app in a `#root` DOM element.

```js
import React from 'react'
import { App } from 'app'

React.render(<App />, document.getElementById('root'))
```
