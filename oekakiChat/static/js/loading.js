$(function () {
  var h = $(window).height();

  $('#wrap').css('display', 'none');
  $('#loader-bg ,#loader').height(h).css('display', 'block');
});

$(function () {
  setTimeout('stopload()', 2500);
});

function stopload() {
  $('#wrap').css('display', 'block');
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
}
