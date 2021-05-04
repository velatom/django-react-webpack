const path = require('path');
const webpack = require('webpack');

const BundleTracker = require('webpack-bundle-tracker');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const port = 3000
const ip = '127.0.0.1'

module.exports = {
    mode: "development", // "production" | "development" | "none"
    context: __dirname,
    entry: {        
        // App: './src/views/App.jsx',
        LinksDetail: './src/views/LinksDetail.jsx',
        vendor: ['react', 'babel-polyfill'],
    },
    output: {        
        filename: '[name]-[hash].bundle.js',
        // path: path.resolve(__dirname, 'dist'),
        // Esto marca donde se dejan los ficheros que genera el comando :
        // node_modules\.bin\webpack --config webpack.config.js
        // El comando se ejecuta desde la carpeta de react
        // la ruta relativa es desde donde esta este fichero hasta llegar a donde vamos a poner los ficheros
        // hay que tener en cuenta que django tiene que poder acceder a la ruta
        path: path.resolve('../links/static/links/bundle/'),
        // El la ruta que se publica en el navegador web de django.
        // Esta funciona con los ficheros compilados:
        // publicPath : `../static/links/bundle/`,
        //Activo esta para que se vean los cambios en directo en desarrollo:
        publicPath : `http://${ip}:${port}/static/links/bundle/`,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            { 
                test: /\.jsx?$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader',
            }
        ]
    },
    plugins: [
        new BundleTracker({
            filename: './webpack-stats.base.json'
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[hash].css',
            chunkFilename: '[id]-[hash].css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify('development')
            }
        }),
    ],
};