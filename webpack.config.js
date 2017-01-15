module.exports = {

    entry: './static/js/main.js',
    output: {
        path: './build/js',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                include: __dirname + '/static/js',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }

};
