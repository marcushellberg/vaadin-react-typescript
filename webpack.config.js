const merge = require('webpack-merge');
const flowDefaults = require('./webpack.generated.js');
const WebpackLiveReloadPlugin = require('webpack-livereload-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const devMode = process.argv.find((v) => v.indexOf('webpack-dev-server') >= 0);

module.exports = merge.smartStrategy({
  entry: 'replace',
  'module.rules': 'replace',
})(flowDefaults, {
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: ['awesome-typescript-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    devMode &&
      new WebpackLiveReloadPlugin({
        port: 35730,
      }),
    devMode &&
      new HtmlWebpackTagsPlugin({
        scripts: ['http://localhost:35730/livereload.js'],
        publicPath: false,
      }),
  ],
});
