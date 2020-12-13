var path = require("path");
23
module.exports = {
    entry: "./src/index.js",
    output: {
    path: path.join(__dirname, "dist", "assets"),
    filename: "bundle.js"
    },
    module: {
    rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
        { test: /\.css$/, use: [ 'style-loader','css-loader' ] }
    ]
    }
};