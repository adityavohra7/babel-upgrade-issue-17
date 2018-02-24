module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist',
    filename: 'output.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  }
};
