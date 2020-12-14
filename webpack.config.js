var path = require("path");
23
module.exports = {
    entry: "./src/index.js",
    output: {
    path: path.join(__dirname, "dist", "assets"),
    filename: "bundle.js",
    assetModuleFilename: 'images/[name][ext]'
    },
    module: {
    rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
        { test: /\.css$/, use: [ 'style-loader','css-loader' ] },
        { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource'},

    ]
    }
};