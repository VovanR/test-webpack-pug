module.exports = {
    entry: {
        index: './src/index.pug'
    },
	output: {
		path: './dist',
        filename: '[name].js'
	},
    module: {
        loaders: [
            {
                test: /\.pug$/,
                loader: 'file?name=[name].html!jade-html'
            }
        ]
    }
};
