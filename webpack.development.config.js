var webpack = require("webpack")
var Root = require("./rootdirectory")

var entry = Root + "/core/uiEntry.js"
var build_dir = Root + "/build/"
var node_modules_dir = Root + "/node_modules/"

module.exports = {
    entry: [
        "webpack/hot/dev-server",
        "webpack-dev-server/client?http://localhost:8080",
        entry,
    ],
    output: {
        path: build_dir,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                include: [
                    Root + "/",
                ],
                exclude: [
                    node_modules_dir,
                ],
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                include: [
                    Root + "/",
                ],
                exclude: [
                    node_modules_dir,
                ],
                loader: "style!css!sass-loader!"
            },
        ]
    }
}