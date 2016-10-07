/// That variable is very useful to know whether we're building in production or development mode
const isProdEnv = process.env.WEBPACK_ENV === 'production';
const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = {
	devtool: 'source-map',
	entry: './src/index',
	output: {
		/// Bundle target directory
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	resolve: {
    	extensions: ['.ts', '.js']
  	},
	//5/ Adding loaders in webpack
	module: {
		preLoaders: [
			{ test: /\.ts$/, loader: 'tslint', exclude: /node_modules/ },

		],
		//3/ Linter wyląduje w preloaderach
		loaders: [
			{ test: /\.ts$/, loaders: ['ng-annotate','ts'], exclude: /node_modules/ },
			{ test:  /\.scss$/, loaders: ['style', 'css', 'sass'] }
		],
	},
	//4/ Let's use UglifyJS in production mode
	plugins: isProdEnv ? [
		new webpack.optimize.UglifyJsPlugin(),
		new CopyWebpackPlugin([{ from: './src/index.html', to: 'index.html' }])
	] : [],
};

module.exports = config;

