const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    contentBase: ['./dist'], // both src and output dirs
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          {

            loader: require.resolve('style-loader'),
          },
          // Translates CSS into CommonJS
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: {
                exportLocalsConvention: 'camelCaseOnly',
              },
              url: true,
            }
          },
          // Compiles Sass to CSS
          {
            loader: require.resolve('sass-loader')
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|PNG)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'images',
            }
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'css', 'scss', 'png', 'gif', 'jpg', 'jpeg'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html'
    }),
    new HotModuleReplacementPlugin()
  ],
};