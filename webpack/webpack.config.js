const loadersConfig = require("./webpack.loaders.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//     .BundleAnalyzerPlugin;
module.exports = {
    entry: {
        app: ["react-hot-loader/patch", "./src/index.tsx"],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", "min.js", ".json"],
        modules: ["node_modules"],
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
        new webpack.ProvidePlugin({
            React: "react",
        }),
        // load `moment/locale/vi.js` and `moment/locale/es.js`
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /vi|es/),
    ],
    stats: {
        colors: true,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
    },
    module: {
        rules: loadersConfig,
    },
};
