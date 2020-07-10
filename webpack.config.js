const path = require("path");
const autoprefixer = require('autoprefixer');

const entryPath = "files/js";
const entryFile = "App.js";

module.exports = {
    entry: `./${entryPath}/${entryFile}`,
    // entry: './src/app.js',
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        contentBase: [path.join(__dirname, 'build'), path.join(__dirname, 'public')],
        compress: true,
        watchContentBase: true,
        inline: true,
        hot: true,
        stats:"errors-only",
        port: 3001
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [autoprefixer()]
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    publicPath: "/images/",
                    outputPath: "/images/"
                }
            }
        ]
    }
};
