document.getElementById('createTheme').onclick = function createTheme() {

    var random = Math.floor(Math.random() * 11);

  $.getJSON("../static/js/theme.json", function (data) {
    //↓actDataの配列内を検索
    for (var i = 0; i < Object.keys(data.themeData).length; i++) {
      //↓結果と一致するnameの各データを取得し、画面に出力する
      if ( data.themeData[random]== data.themeData[i]) {
        var parent = document.getElementById("createTheme");
        var p = document.createElement("p");
        p.innerHTML = data.themeData[random].shiritoriTheme;
        parent.appendChild(p);
      }
    }
  })

}
