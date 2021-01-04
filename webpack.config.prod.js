const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // which environment is this file applying to
    mode: "production",

    // which files to track
    entry: {
        index: "./src/js/index.js",
        contact: "./src/js/contact.js",
    },

    // filename and directory where files are compiled to
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "assets/[name].[ext]",
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
            // html
            {
                test: /\.(html)$/,
                use: ["html-loader"],
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
            // inject: "head",
            title: "Michal Antczak - freelance webdeveloper",
            // meta: {
            //     description:
            //         "Webdeveloper nodig? Kies mij en onderscheid je van de concurrentie. Ik ontwerp voor je een prachtige en unieke websites, webapplicaties, webshops en online advertenties.",
            // },
            favicon: "./src/img/logo.svg",
            filename: "index.html",
            template: path.resolve("./src/pages/index.ejs"),
        }),
        new HtmlWebpackPlugin({
            // specifies html template file to use, auto generate index.html file in dist directory
            chunks: ["contact"],
            title: "Contact Michal Antczak",
            lang: "en-US",
            meta: [
                {
                    name: "description",
                    content:
                        "Neem contact met mij op. Vul onderstande formulier of bel: (+31) (0) 6 82 30 70 51  of stuur mij een e-mail: info@michalantczak.com. Tot later!",
                },
            ],
            favicon: "./src/img/logo.svg",
            filename: "contact.html",
            template: "./src/pages/contact.ejs",
        }),
        // new FaviconsWebpackPlugin("./src/img/logo.svg"),
    ],
};
