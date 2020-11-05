const path = require("path");
const webpack = require("webpack");
const config = require("./webpack.config.js");
const webpackMerge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { URL } = require("./webpack.env.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = webpackMerge(config, {
    entry: "./src/index.tsx",
    output: {
        filename: "[name].[hash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "inline-source-map",
    devServer: {
        historyApiFallback: true,
        stats: "minimal",
        port: 4050, // most frontend port
        contentBase: "./build",
        inline: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: `[name].css`,
        }),
        new webpack.DefinePlugin({
            "process.env.API_URL": JSON.stringify(`${URL["dev"].API_URL}`),
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: "dev",
            DEBUG: true,
        }),
    ],
});
