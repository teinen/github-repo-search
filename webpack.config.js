const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = [
  {
    mode: 'production',
    entry: './src/main.js',
    output: {
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                url: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('autoprefixer')({
                    browsers: ['last 2 versions']
                  })
                ]
              }
            },
            'sass-loader'
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.vue']
    },
    performance: {
      maxEntrypointSize: 1000000,
      maxAssetSize: 1000000
    },
    devServer: {
      host: '0.0.0.0',
      port: 8080
    },
    plugins: [
      new VueLoaderPlugin()
    ],
  },
];