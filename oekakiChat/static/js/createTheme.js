document.getElementById('createTheme').onclick = function createTheme() {

  var random = Math.floor(Math.random() * 11);

  $.getJSON("../static/js/theme.json", function (data) {
    for (var i = 0; i < Object.keys(data.themeData).length; i++) {
      if (data.themeData[random] == data.themeData[i]) {
        document.getElementById("generateTheme").textContent = data.themeData[random].shiritoriTheme;
      }
    }
  })

}
