module.exports = {
    entry: {
        index: './src/index.pug',
        styles: './src/styles/styles.css'
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
            },
            {
                test: /\.css/,
                loader: 'file?name=[name].css'
            }
        ]
    }
};
