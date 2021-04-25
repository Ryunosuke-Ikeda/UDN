window.onload = function () {
  roomNumber = 1;
  for (var i = 3; i > 0; i--) {
    document.getElementById("rouka").insertAdjacentHTML('beforeend', '<div id="grade' + i + '" class="grade">');
    for (var j = 1; j < 6; j++) {
      document.getElementById("grade" + i).insertAdjacentHTML('beforeend', '<div id="' + i + '-' + j + '" class="classroom"><span>' + i + '-' + j + '</span><span><span class="material-icons">face</span></span><span id=room' + roomNumber + '>1</span></div>');
      roomNumber++;
    }
    document.getElementById("rouka").insertAdjacentHTML('beforeend', '</div>');
  }
  //document.getElementById("rouka").insertAdjacentHTML('beforeend', '<label class="nameLabel" for="nameForm">名前:</label><input type="text" class="form-control" id="nameForm"></div><button type="submit" class="btn btn-primary" id="sendButton">入室</button>');
}
