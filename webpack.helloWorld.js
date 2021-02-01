// https://webpack.js.org/concepts/configuration/
var path = require('path');

// added for installing page.
const HtmlWebpackPlugin = require('html-webpack-plugin');

// need css-loader here.
module.exports = {
	mode: 'development',
	entry: './helloWorld.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'foo.bundle.js'
	}
	,
	module:{
		rules:[
			{
				test: /\.css$/i,
				use: ["style-loader","css-loader"]

			}
		]
	},
	// added
	//plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') })]
	plugins: [new HtmlWebpackPlugin({ template:  'helloWorld.html' })]

};
