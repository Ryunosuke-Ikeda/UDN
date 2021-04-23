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
