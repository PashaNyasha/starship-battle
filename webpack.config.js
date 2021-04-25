const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const MiniCssExtraPlugin = require('mini-css-extract-plugin');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const IS_DEV = !IS_PRODUCTION;

const getPath = pathToFile => path.resolve(__dirname, pathToFile);
const getFileName = extension => IS_DEV ? `[name].${extension}` : `[name].[fullhash].${extension}`;

module.exports = {
    context: __dirname,
    mode: 'development',
    entry: getPath('src/index.ts'),
    output: {
        filename: getFileName('js'),
        path: getPath('./build')
    },

    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
            '@': getPath('src')
        }
    },

    devtool: IS_DEV ? 'source-map' : false,

    devServer: {
        port: 3000,
        hot: IS_DEV,
        open: true
    },

    plugins: [
        // Cleaner
        new CleanWebpackPlugin(),

        // HTML
        new HTMLWebpackPlugin({
            title: 'My webpack app',
            template: getPath('src/index.html'),
            minify: {
                removeComments: IS_PRODUCTION,
                collapseWhitespace: IS_PRODUCTION
            }
        }),

        // Mini CSS
        new MiniCssExtraPlugin({
            filename: getFileName('css'),
        }),

        // Typescript
        new ForkTsCheckerWebpackPlugin(),

        //Eslint
        new ESLintWebpackPlugin(),

        // Images min
        new ImageMinimizerPlugin({
            minimizerOptions: {
              // Lossless optimization with custom option
              // Feel free to experiment with options for better result for you
              plugins: [
                ['gifsicle', { interlaced: true }],
                ['jpegtran', { progressive: true }],
                ['optipng', { optimizationLevel: 5 }],
                [
                  'svgo',
                  {
                    plugins: [
                      {
                        removeViewBox: false
                      }
                    ]
                  }
                ]
              ]
            }
          }),

          new ESLintWebpackPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                  MiniCssExtraPlugin.loader,
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader"
                ]
            },

            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },

            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            },

            { 
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, 
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'fonts/[name].[ext]'
                }
            },
        ]
    }
}