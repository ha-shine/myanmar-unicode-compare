const path = require('path');

module.exports = {
    entry : './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {test: /\.vue$/, use: ['vue-loader']},
            {test: /\.css$/, use: ['css-loader']},
            {
                test: /\.ttf$/, 
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    }
}