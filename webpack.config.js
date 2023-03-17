const path = require('path');

module.exports = {
  mode: 'production',
  resolve: {
    fallback: {
      crypto: false,
      querystring: false
    }
  },
  experiments: {
    outputModule: true,
  },
  entry: '@cavrnus/lib',
  output: {
    filename: 'cavrnus-lib.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'module',
    },
  },
};