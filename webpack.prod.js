const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "production", // this trigger webpack out-of-box prod optimizations
	entry: "./index.js",
	output: {
		filename: `[name].[hash].js`, // [hash] is useful for cache busting!
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					"css-loader"
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin(),
		// always deletes the dist folder first in each build run.
		new CleanWebpackPlugin(["dist"], {
			root: __dirname // "dist" will be appended to this absolute path. See https://github.com/johnagan/clean-webpack-plugin#options-and-defaults-optional
		}),
		// the plugin to extract our css into separate .css files
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css"
		})
	],
	devtool: "source-map" // supposedly the ideal type without bloating bundle size
};