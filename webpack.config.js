// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";


const config = {
  entry:"./js/common.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    loaders: {
      rules: {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    },
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin(), // Generates default index.html
    new HtmlWebpackPlugin({
      hash: true,
      title: "About template",
      myPageHeader: "This is about page",
      filename: 'about.html',
      template: "./templates/about.html",
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: "Home template",
      myPageHeader: "This is the home page",
      filename: 'home.html',
      template: "./templates/home.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
