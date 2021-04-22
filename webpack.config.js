// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: 'development',

  // エントリーポイントの設定
  entry: './oekakiChat/static/js/index.js',

  // 出力の設定
  output: {

    // 出力するファイル名
    filename: 'bundle.js',

    // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
    path: path.join(__dirname, '/oekakiChat/static/webpack')

  },

  module: {
    rules: [
      // Sassファイルの読み込みとコンパイル
      {
        test: /\.scss/, // 対象となるファイルの拡張子
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // CSSをバンドルするための機能
          {
            loader: "css-loader",
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する
              url: false,

              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2
            }
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    // CSSファイルを外だしにするプラグイン
    new MiniCssExtractPlugin({
      // ファイル名を設定します
      filename: "style.css",
    }),
  ],
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ["web", "es5"],
};
