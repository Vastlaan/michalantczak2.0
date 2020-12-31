const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // which environment is this file applying to
    mode: "production",

    // which files to track
    entry: {
        index: "./src/js/app.js",
        contact: "./src/js/app.js",
    },

    // // use build in source map to track files in the bundle
    // devtool: "inline-source-map",

    // // development server configuration
    // devServer: {
    //     // specify source directory
    //     contentBase: "./dist",
    // },

    // filename and directory where files are compiled to
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },

    // specify loaders for given extensions and its options
    module: {
        rules: [
            // test js files and apply babel plugin
            {
                test: /\.m?js$/i,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            // test scss or sass files
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "",
                        },
                    },

                    "css-loader",

                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"), // this is actually default
                        },
                    },
                ],
            },
            // images
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            // fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            // site map
            {
                test: /\.xml$/i,
                use: ["xml-loader"],
            },
        ],
    },

    // add plugins to use while creating the output bundles
    plugins: [
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }), // cleans up dist directory on every rebuild to get rid of deleted/unused files (stale assets are not erased, like index.html file)
        new HtmlWebpackPlugin({
            // specifies html template file to use, auto generate index.html file in dist directory
            chunks: ["index"],
            title: "Index",
            filename: "index.html",
            template: path.resolve("./src/pages/index.html"),
        }),
        new HtmlWebpackPlugin({
            // specifies html template file to use, auto generate index.html file in dist directory
            chunks: ["contact"],
            title: "Contact",
            filename: "contact.html",
            template: path.resolve("./src/pages/contact.html"),
        }),
    ],
};
