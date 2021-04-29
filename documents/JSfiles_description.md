# 各JSファイルの説明

- app.js
  - nodeで実行する際に使用

- myfirst.js
  - dockerで実行する際に使用

- jquery-3.6.0.min.js
  - minify化されたjQuery(ver.3.6.0)ファイル

- index.js
  - webpackでbundleするために、全てのJSファイルをimportしている

- bundle.js
  - webpackでindex.jsをbuildした結果、生成されたファイル
  - index.htmlではこのファイルを読み込んでいる

- addRoom.js
  - addRoom()
    - index.htmlの `<button type="button" id="addRoom"><span class="material-icons">add</span></button>` をonclickしたときに、`<select class="form-control" id="rooms"></select>` 内にoption要素(部屋の数)を追加する

- loading.js
  - top.htmlでloadingを2.5秒間のみ表示させている

- createTheme.js
  - createTheme()
    - 乱数を生成している
    - 乱数と一致するtheme.jsonの配列番号に格納されているお題を表示させている

- rouka.js
  - 入室ボタンを押すと、廊下で表示している要素のstyleを `display: none` に変更し、教室で表示する要素にかかっている `display: none` を消去することで、擬似的にページ遷移したように見せている
  - 背景画像も廊下(BG-rouka.jpeg)から教室(BG-index.jpeg)に変更している
