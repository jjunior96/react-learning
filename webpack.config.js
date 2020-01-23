const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      {
        test: /\.js$/, // Todos os arquivos que .js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, 
      {
        test: /\.css$/, // Todos os arquivos .css
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' }, // Injeta o css dentro do index.html
          { loader: 'css-loader' }, // Importação dentro de arquivos .css 

        ]
      }, 
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
};