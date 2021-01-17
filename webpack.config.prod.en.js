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
        path: path.resolve(__dirname, "dist", "en"),
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
            lang: "en",
            meta: [
                {
                    name: "description",
                    content:
                        "Need a Web Developer? Choose me and stand out from the competition. I design beautiful and unique websites, webapplications, webshops and online advertisements for you.",
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
                        "Need a Web Developer? Choose me and stand out from the competition. I design beautiful and unique websites, webapplications, webshops and online advertisements for you.",
                },

                {
                    name: "og:url",
                    content: "https://michalantczak.com",
                },
            ],
            favicon: "./src/img/logo.svg",
            filename: "index.html",
            template: "./src/pages/en/index.ejs",
        }),
        new HtmlWebpackPlugin({
            // specifies html template file to use, auto generate index.html file in dist directory
            chunks: ["contact"],
            title: "Contact Michal Antczak",
            lang: "en",
            meta: [
                {
                    name: "description",
                    content:
                        "Contact me. Fill in the form below or call: (+31) (0) 6 82 30 70 51 or send me an e-mail: info@michalantczak.com",
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
                        "Contact me. Fill in the form below or call: (+31) (0) 6 82 30 70 51 or send me an e-mail: info@michalantczak.com",
                },

                {
                    name: "og:url",
                    content: "https://michalantczak.com/contact.html",
                },
            ],
            favicon: "./src/img/logo.svg",
            filename: "contact.html",
            template: "./src/pages/en/contact.ejs",
        }),
        new HtmlWebpackPlugin({
            // specifies html template file to use, auto generate index.html file in dist directory
            chunks: ["skills"],
            title: "Skills Michal Antczak",
            lang: "en",
            meta: [
                {
                    name: "description",
                    content:
                        "Discover which programming languages, frameworks and other web tools I know best. Do you use similar technologies in your projects? Fine! I can get started right away!",
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
                        "Discover which programming languages, frameworks and other web tools I know best. Do you use similar technologies in your projects? Fine! I can get started right away!",
                },

                {
                    name: "og:url",
                    content: "https://michalantczak.com/skills.html",
                },
            ],
            favicon: "./src/img/logo.svg",
            filename: "skills.html",
            template: "./src/pages/en/skills.ejs",
        }),
        new HtmlWebpackPlugin({
            // specifies html template file to use, auto generate index.html file in dist directory
            chunks: ["certificaten"],
            title: "Certificats Michal Antczak",
            lang: "en",
            meta: [
                {
                    name: "description",
                    content:
                        "Hereby my collection of some certificates that I obtained during my learning process as a developer.",
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
                        "Hereby my collection of some certificates that I obtained during my learning process as a developer.",
                },
                {
                    name: "og:image",
                    content: "./src/img/assets/og_image.jpg",
                },
                {
                    name: "og:url",
                    content: "https://michalantczak.com/certificaten.html",
                },
            ],
            favicon: "./src/img/logo.svg",
            filename: "certificaten.html",
            template: "./src/pages/en/certificaten.ejs",
        }),
        new HtmlWebpackPlugin({
            // specifies html template file to use, auto generate index.html file in dist directory
            chunks: ["portfolio"],
            title: "Portfolio Michal Antczak",
            lang: "en",
            meta: [
                {
                    name: "description",
                    content: "Gallery of the projects I have designed.",
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
                    content: "Gallery of the projects I have designed.",
                },

                {
                    name: "og:url",
                    content: "https://michalantczak.com/portfolio.html",
                },
            ],
            favicon: "./src/img/logo.svg",
            filename: "portfolio.html",
            template: "./src/pages/en/portfolio.ejs",
        }),
        new HtmlWebpackPlugin({
            // specifies html template file to use, auto generate index.html file in dist directory
            chunks: ["cookies"],
            title: "Cookies Policy Michal Antczak",
            lang: "en",
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
