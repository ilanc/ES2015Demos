module.exports = {
    entry: './modules/moduleLoadTest.js',
    output: {
        path: './dist',
        filename: 'moduleLoadBundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
}
