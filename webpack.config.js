 module.exports = {
	 output: {
		filename: 'app.bundle.js'
	 },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
     }
 }
