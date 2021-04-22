# 各JSファイルの説明

- index.js
  - webpackでbundleするために、全てのJSファイルをimportしている

- bundle.js
  - webpackでindex.jsをbuildした結果、生成されたファイル
  - index.htmlではこのファイルを読み込んでいる

- addRoom.js
  - addRoom()
    - index.htmlの `<button type="button" id="addRoom"><span class="material-icons">add</span></button>` をonclickしたときに、`<select class="form-control" id="rooms"></select>` 内にoption要素(部屋の数)を追加する
