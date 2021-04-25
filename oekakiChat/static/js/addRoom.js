window.onload = function () {
  roomNumber = 1;
  for (var i = 3; i > 0; i--){
    document.getElementById("rouka").insertAdjacentHTML('beforeend', '<div id="grade' + i + '" class="grade">');
    for (var j = 1; j < 6; j++){
      document.getElementById("grade"+ i).insertAdjacentHTML('beforeend', '<div id="' + i+ '-'+ j + '" class="classroom" href="" data-target="modal'+roomNumber+'"><span>' + i + '-' + j + '</span><span><span class="material-icons">face</span><span id=room'+roomNumber+'>1</span></span></div>');
      roomNumber += 1;
      //document.getElementById("grade"+i).insertAdjacentHTML('beforeend', '</div id="modal'+roomNumber+'" class="modal js-modal"><div class="modal__bg js-modal-close"></div><div class="modal__content"><p>1つ目モーダルウィンドウです。ここにモーダルウィンドウで表示したいコンテンツを入れます。モーダルウィンドウを閉じる場合は下の「閉じる」をクリックするか、背景の黒い部分をクリックしても閉じることができます。</p><a class="js-modal-close" href="">閉じる</a></div></div>');
    }
    document.getElementById("rouka").insertAdjacentHTML('beforeend', '</div>');
    console.log("テストだよ");
  }
}

/*　追加部分
$(function(){
  var winScrollTop;
  $('.classroom').each(function(){
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
});　*/