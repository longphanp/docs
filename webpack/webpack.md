# Docs

[https://webpack.js.org/concepts/](https://webpack.js.org/concepts/)

# Installation

```
    npm install webpack webpack-cli --save-dev
```

# Dev server

```
    npm install --save-dev webpack-dev-server

```

# Loaders

```js
    module: {
    rules: [{ test: /\.txt$/, use: 'txt-loader' }],
  },
```

[https://webpack.js.org/loaders/](https://webpack.js.org/loaders/)

# Plugins

```js
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
```

[https://webpack.js.org/plugins/](https://webpack.js.org/plugins/)
