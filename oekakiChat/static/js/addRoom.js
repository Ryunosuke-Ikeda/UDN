window.onload = function () {
  roomNumber = 1;
  for (var i = 3; i > 0; i--){
    document.getElementById("rouka").insertAdjacentHTML('beforeend', '<div id="grade' + i + '" class="grade">');
    for (var j = 1; j < 6; j++){
      document.getElementById("grade"+ i).insertAdjacentHTML('beforeend', '<div id="' + i+ '-'+ j + '" class="classroom"><span>' + i + '-' + j + '</span><span><span class="material-icons">face</span><span id=room'+roomNumber+'>0</span></span></div>');
      roomNumber += 1;
    }
    document.getElementById("rouka").insertAdjacentHTML('beforeend', '</div>');
  }
}

$(function(){
  var winScrollTop;
  $('.js-modal-open').each(function(){
      $(this).on('click',function(){
          //スクロール位置を取得
          winScrollTop = $(window).scrollTop();
          var target = $(this).data('target');
          var modal = document.getElementById(target);
          $(modal).fadeIn();
          return false;
      });
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
      $('body,html').stop().animate({scrollTop:winScrollTop}, 100);
      return false;
  }); 
});