const path = require('path');

module.exports = {
  // mode defaults to 'production' if not set
  mode: 'development',

  entry: './src/App.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // add source maps
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference the .babelrc
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  // removes the requirement to add the .jsx extension when importing
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
