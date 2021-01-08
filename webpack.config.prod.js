const path = require("path");
const webpack = require("webpack");
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
        skills: "./src/js/skills.js",
        certificaten: "./src/js/certificaten.js",
        portfolio: "./src/js/portfolio.js",
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
        new webpack.DefinePlugin({
            TOKEN: JSON.stringify(
                "hhtel3922Ssjeeo3rjesdfksfowlwodFEWFFsfjfWHNNRE"
            ),
        }),
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
        new HtmlWebpackPlugin({
            // specifies html template file to use, auto generate index.html file in dist directory
            chunks: ["skills"],
            title: "Skills Michal Antczak",
            lang: "nl-NL",
            meta: [
                {
                    name: "description",
                    content:
                        "Ontdek welke programeur talen, frameworks en andere webtools ken ik best. Gebruik je gelijke technologieen in jouw projecten? Prima! Ik kan voor je direct aan de slag!",
                },
            ],
            favicon: "./src/img/logo.svg",
            filename: "skills.html",
            template: "./src/pages/skills.ejs",
        }),
        new HtmlWebpackPlugin({
            // specifies html template file to use, auto generate index.html file in dist directory
            chunks: ["certificaten"],
            title: "Certificaten Michal Antczak",
            lang: "nl-NL",
            meta: [
                {
                    name: "description",
                    content:
                        "Hierbij mijn collectie van sommige certificaten, die ik heb gehaald tijdens mijn otwikkeling process als een developer.",
                },
            ],
            favicon: "./src/img/logo.svg",
            filename: "certificaten.html",
            template: "./src/pages/certificaten.ejs",
        }),
        new HtmlWebpackPlugin({
            // specifies html template file to use, auto generate index.html file in dist directory
            chunks: ["portfolio"],
            title: "Portfolio Michal Antczak",
            lang: "nl-NL",
            meta: [
                {
                    name: "description",
                    content: "Galerij van de projecten die ik heb ontworpen.",
                },
            ],
            favicon: "./src/img/logo.svg",
            filename: "portfolio.html",
            template: "./src/pages/portfolio.ejs",
        }),
        // new FaviconsWebpackPlugin("./src/img/logo.svg"),
    ],
};
