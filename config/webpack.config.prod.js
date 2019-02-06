/**
 * Webpack Configuration
 *
 * Working of a Webpack can be very simple or complex. This is an intenally simple
 * build configuration.
 *
 * Webpack basics — If you are new the Webpack here's all you need to know:
 *     1. Webpack is a module bundler. It bundles different JS modules together.
 *     2. It needs and entry point and an ouput to process file(s) and bundle them.
 *     3. By default it only understands common JavaScript but you can make it
 *        understand other formats by way of adding a Webpack loader.
 *     4. In the file below you will find an entry point, an ouput, and a babel-loader
 *        that tests all .js files excluding the ones in node_modules to process the
 *        ESNext and make it compatible with older browsers i.e. it converts the
 *        ESNext (new standards of JavaScript) into old JavaScript through a loader
 *        by Babel.
 *
 * TODO: Instructions.
 *
 * @since 0.0.1
 */

const alias = require('./alias');
const paths = require('./paths');
const externals = require('./externals');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const GJCCSSPlugin = new ExtractTextPlugin({
	filename: './dist/gutenberg-jalali-calendar.build.css',
});

module.exports = {
	entry: {
		'./dist/gutenberg-jalali-calendar.build': paths.entryFile,
	},
	output: {
		pathinfo: true,
		path: paths.dist,
		filename: '[name].js',
	},
	devtool: false,
	module: {
		rules: [
			{
				test: /\.(js|jsx|mjs)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
					},
				},
			},
			{
				test: /\.css$/,
				exclude: /(bower_components)/,
				use: GJCCSSPlugin.extract({
							fallback: 'style-loader',
							use: [
								'css-loader', {
									loader: 'postcss-loader',
									options: {
										ident: 'postcss',
										plugins: [
											require('cssnano')(),
											autoprefixer({
												browsers: [
													'>1%',
													'last 4 versions',
													'Firefox ESR',
													'not ie < 9',
												],
												flexbox: 'no-2009',
											}),
										],
									},
								}],
						},
				),
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'dist/assets/fonts',
					publicPath: './assets/fonts',
				},
			}
		],
	},
	plugins: [
			GJCCSSPlugin,
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				comparisons: false,
			},
			mangle: {
				safari10: true,
			},
			output: {
				comments: false,
				ascii_only: true,
			},
			sourceMap: false,
		})
	],
	stats: 'minimal',
	externals: externals,
	resolve: {
		alias: alias,
	},
};
