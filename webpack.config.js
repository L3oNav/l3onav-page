const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/app.bundle.js',

    },
    module: {
        rules: [
            {
                test:/\.(jsx?)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test:/\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                  ],
            },
            {
                test:/\.(jpg|png|gif|woff|eot|ttf|svg|mp4|webm)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'public/index.html'
        }),
        new CompressionPlugin({
            exclude: '/node_modules/',
        })
    ]
}