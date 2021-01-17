const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

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
        cookies: "./src/js/cookies.js",
    },
    // use build in source map to track files in the bundle
    devtool: "inline-source-map",

    // filename and directory where files are compiled to
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist", "nl"),
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
        new CopyPlugin({
            patterns: [{ from: "./src/seo_assets" }],
        }),
        new HtmlWebpackPlugin({
            // specifies html template file to use, auto generate index.html file in dist directory
            chunks: ["index"],
            // inject: "head",
            title: "Michal Antczak - freelance webdeveloper",
            lang: "nl-NL",
            meta: [
                {
                    name: "description",
                    content:
                        "Web developer nodig? Kies mij en onderscheid je van de concurrentie. Ik ontwerp voor je een prachtige en unieke websites, webapplicaties, webshops en online advertenties.",
                },
                {
                    name: "robots",
                    content: "index, follow",
                },
                {
                    name: "og:type",
                    content: "article",
                },
                {
                    name: "og:title",
                    content: "Michal Antczak - freelance webdeveloper",
                },
                {
                    name: "og:description",
                    content:
                        "Web developer nodig? Kies mij en onderscheid je van de concurrentie. Ik ontwerp voor je een prachtige en unieke websites, webapplicaties, webshops en online advertenties.",
                },

                {
                    name: "og:url",
                    content: "https://michalantczak.com",
                },
            ],
            favicon: "./src/img/logo.svg",
            filename: "index.html",
            template: "./src/pages/nl/index.ejs",
        }),
        new HtmlWebpackPlugin({
            // specifies html template file to use, auto generate index.html file in dist directory
            chunks: ["contact"],
            title: "Contact Michal Antczak",
            lang: "nl-NL",
            meta: [
                {
                    name: "description",
                    content:
                        "Neem contact met mij op. Vul onderstaande formulier of bel: (+31) (0) 6 82 30 70 51  of stuur mij een e-mail: info@michalantczak.com",
                },
                {
                    name: "robots",
                    content: "index, follow",
                },
                {
                    name: "og:type",
                    content: "article",
                },
                {
                    name: "og:title",
                    content: "Contact Michal Antczak",
                },
                {
                    name: "og:description",
                    content:
                        "Neem contact met mij op. Vul onderstande formulier of bel: (+31) (0) 6 82 30 70 51  of stuur mij een e-mail: info@michalantczak.com",
                },

                {
                    name: "og:url",
                    content: "https://michalantczak.com/contact.html",
                },
            ],
            favicon: "./src/img/logo.svg",
            filename: "contact.html",
            template: "./src/pages/nl/contact.ejs",
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
                        "Ontdek welke programmeertalen, frameworks en andere webtools ken ik best. Gebruik je gelijke technologieen in jouw projecten? Prima! Ik kan voor je direct aan de slag!",
                },
                {
                    name: "robots",
                    content: "index, follow",
                },
                {
                    name: "og:type",
                    content: "article",
                },
                {
                    name: "og:title",
                    content: "Contact Michal Antczak",
                },
                {
                    name: "og:description",
                    content:
                        "Ontdek welke programmeertalen, frameworks en andere webtools ken ik best. Gebruik je gelijke technologieen in jouw projecten? Prima! Ik kan voor je direct aan de slag!",
                },

                {
                    name: "og:url",
                    content: "https://michalantczak.com/skills.html",
                },
            ],
            favicon: "./src/img/logo.svg",
            filename: "skills.html",
            template: "./src/pages/nl/skills.ejs",
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
                {
                    name: "robots",
                    content: "index, follow",
                },
                {
                    name: "og:type",
                    content: "article",
                },
                {
                    name: "og:title",
                    content: "Certificaten Michal Antczak",
                },
                {
                    name: "og:description",
                    content:
                        "Hierbij mijn collectie van sommige certificaten, die ik heb gehaald tijdens mijn otwikkeling process als een developer.",
                },
                {
                    name: "og:image",
                    content: "./src/img/og_image.jpg",
                },
                {
                    name: "og:url",
                    content: "https://michalantczak.com/certificaten.html",
                },
            ],
            favicon: "./src/img/logo.svg",
            filename: "certificaten.html",
            template: "./src/pages/nl/certificaten.ejs",
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
                {
                    name: "robots",
                    content: "index, follow",
                },
                {
                    name: "og:type",
                    content: "article",
                },
                {
                    name: "og:title",
                    content: "Portfolio Michal Antczak",
                },
                {
                    name: "og:description",
                    content: "Galerij van de projecten die ik heb ontworpen.",
                },

                {
                    name: "og:url",
                    content: "https://michalantczak.com/portfolio.html",
                },
            ],
            favicon: "./src/img/logo.svg",
            filename: "portfolio.html",
            template: "./src/pages/nl/portfolio.ejs",
        }),
        new HtmlWebpackPlugin({
            // specifies html template file to use, auto generate index.html file in dist directory
            chunks: ["cookies"],
            title: "Cookies Policy Michal Antczak",
            lang: "nl-NL",
            meta: [
                {
                    name: "description",
                    content: "Cookies policy.",
                },
                {
                    name: "robots",
                    content: "noindex, unfollow",
                },
            ],
            favicon: "./src/img/logo.svg",
            filename: "cookies.html",
            template: "./src/pages/nl/cookies.ejs",
        }),
    ],
};
