const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }
  return config
}
const cssLoaders = extra => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: (resourcePath, context) => {
          return path.relative(path.dirname(resourcePath), context) + '/';
        }
      },
    },
    'css-loader',
  ]

  if (extra) {
    loaders.push(extra)
  }

  return loaders
}
module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: ['@babel/polyfill', './index.js']
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@scripts': path.resolve(__dirname, 'src/scripts'),
      '@': path.resolve(__dirname, 'src')
    }
  },
  optimization: optimization(),
  plugins: [
    new MiniCssExtractPlugin({
      filename: filename('css')
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders()
      },
      {
        test: /\.less$/,
        use: cssLoaders('less-loader')
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader')
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        loader: 'file-loader',
        options: {
          publicPath: '.',
        }
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/i,
        loader: 'file-loader',
        options: {
          publicPath: '.',
        }
      }
    ]
  }
}