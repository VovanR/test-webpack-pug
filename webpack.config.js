const path = require('path');

module.exports = {
    entry: {
        index: './src/index.pug'
    },
	output: {
		path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
	},
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].html'
                        }
                    },
                    'pug-html-loader'
                ]
            }
        ]
    }
};
