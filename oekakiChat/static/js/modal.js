  (function () {
  const modalArea = document.getElementById('modalArea');
  const openModal = document.getElementById('openModal');
  const closeModal = document.getElementById('closeModal');
  const modalBg = document.getElementById('modalBg');
  const toggle = [openModal,closeModal,modalBg];

  for(let i=0, len=toggle.length ; i<len ; i++){
    toggle[i].addEventListener('click',function(){
      modalArea.classList.toggle('is-show');
    },false);
  }
    console.log("ok");
}());

/*
$('body').on('click', '.classroom', function () {
  // drag-and-dropクラスを持つ要素をすべて取得
  const elms = document.querySelectorAll(".classroom");
  console.log("ok1");
  // クリックした要素のインデックスを格納する変数
  let index;

  // elementsを持つ要素すべてに以下の処理を追加する
  elms.forEach((elm) => {
    // インデックスを変数indexへ格納する
      index = [].slice.call(elms).indexOf(elm);
  });
  console.log(index);
  //document.getElementById('memo').classList.add("memo");
  //document.getElementById('memo').id = index;
})
*/

/*
//tagetclassグループで指定
const target = document.querySelectorAll('.classroom');
//ログの出力先
const log = document.getElementById('log');
console.log(target);
//for分で要素数分ループ処理
for (let i = 0; i < target.length; i++) {

	//クリックイベントを追加
	target[i].addEventListener('click', (event) => {

		//idを取得してログに出力する
		log.innerHTML = event.target.id + `をクリックしました。`;

	}, false);

}
*/

$('body').on('click', '.classroom', function () {

  //tagetclassグループで指定
  const target = document.querySelectorAll('.classroom');
  //ログの出力先
  const log = document.getElementById('log');

  console.log(event.target.id);

  console.log("ok");

  /*
var a = "aaa";
var b = {
  [a]: "bbb"
};
console.log(b[a]);   //bbb
console.log(b.aaa);
*/

  /*
  var a = "aaa";
  var getID = event.target.id;
　eval("const " + getID + "=" + event.target.id);
　console.log(getID);
*/

  //console.log(target);
  //for分で要素数分ループ処理
  //for (let i = 0; i < target.length; i++) {
/*
    //クリックイベントを追加
    target[i].addEventListener('click', (event) => {

      //idを取得してログに出力する
      log.innerHTML = event.target.id + `をクリックしました。`;

    }, false);
    */
    //log.innerHTML = event.target.id + `をクリックしました。`;

    //console.log(event.target.id);
  //}
})
