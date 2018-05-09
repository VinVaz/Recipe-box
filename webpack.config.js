const path = require('path');
module.exports = {
	entry: './source/app.js',
	output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'recipebox.js'
    },
	module: {
      rules: [
        {
          test: /\.js$/,
          use: [
          {
            loader: 'babel-loader',
            options: {
            presets: ['react', 'env'],
            plugins: ['transform-class-properties']
            }
           }
          ],
           exclude: path.resolve(__dirname, 'node_modules')
         }
      ]
    }
};