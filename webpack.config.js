const path = require('path')

module.exports = env => {
  const isProduction = env === 'production'
  return {
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      libraryTarget: 'umd',
      library: 'TimeInputPolyfill'
    },
    module: {
      rules: [
        {
		  include: path.resolve(__dirname, 'src'),
		  exclude: /react-time-input-polyfil\/node_modules/,
          test: /\.js$/,
          use: {
            loader:'babel-loader',

            options: {
                presets: ['@babel/preset-env'],
                plugins: [
					'@babel/transform-spread',
					'@babel/proposal-object-rest-spread'
				]
            },
          }
        }
      ]
    },
    resolve: {
      // Can require('file') instead of require('file.js') etc.
      extensions: ['.js', '.json']
    },
  };
}
