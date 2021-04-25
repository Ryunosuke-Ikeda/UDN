window.onload = function () {
  for (var i = 3; i > 0; i--){
    document.getElementById("rouka").insertAdjacentHTML('beforeend', '<div id="grade' + i + '" class="grade">');
    for (var j = 1; j < 6; j++){
      document.getElementById("grade"+ i).insertAdjacentHTML('beforeend', '<div value="room' + i + j +'"  id="room ' + i + j +' "  class="classroom"><span value="room' + i + j +'"  id="room' + i + j +' "  class="classroom">' + i + '-' + j + '</span><span value="room' + i + j +'"  id="room' + i + j +' "  class="classroom"><span value="room' + i + j +'"  id="room' + i + j +' " class="classroom material-icons">face</span></span></div>');
    }
    document.getElementById("rouka").insertAdjacentHTML('beforeend', '</div>');
  }
}


/*
    for (var j = 1; j < 6; j++){
      document.getElementById("grade"+ i).insertAdjacentHTML('beforeend', '<div id="' + i+ '-'+ j + '" class="classroom"><span>' + i + '-' + j + '</span><span><span class="material-icons">face</span></span></div>');
    }
*/
