# Getting started

```
npm run build-save
```

## bootstraping the project
https://www.npmjs.com/package/@cavrnus/lib/v/0.3.25

```
npm init
npm i --save-dev npx
npm i --save-dev webpack webpack-cli 
npm i --save-dev browserify
```


## Polyfills
webpack.config.js
```
resolve: {
  fallback: {
    crypto: false,
    querystring: false
  }
}
```

### or

```
npm install crypto-browserify querystring-es3
```

webpack.config.js
```
resolve: {
  fallback: {
    crypto: require.resolve('crypto-browserify'),
    querystring: require.resolve('querystring-es3')
  }
}
```
