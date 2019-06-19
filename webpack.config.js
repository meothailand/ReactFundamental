module.exports = {
    entry: [
        './source/App.js'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loader: [{
            test: /\.jsx?$/,
            loader: 'babel'
        }]
    }
};