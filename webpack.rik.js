// https://webpack.js.org/concepts/configuration/
var path = require('path');

module.exports = {
	mode: 'development',
	entry: './foo.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'foo.bundle.js'
	}
};

//See: Configuration section for all supported configuration options
//Multi