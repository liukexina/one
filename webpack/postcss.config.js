module.exports = {
    plugins: [
        require('autoprefixer')
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader:"css-loader",
                        options: {importLoaders: 1}
                    }, 'postcss-loader'],
                    publicPath:'../'
                })
            }
        ]
    }
};