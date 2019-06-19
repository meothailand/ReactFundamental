module.exports = {
    entry: [
        './source/App.js'
    ],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            query: { presets: ["es2015", "react"] }
        }]
    }
};