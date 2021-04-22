document.getElementById('addRoom').onclick  = function addRoom() {
  var parent = document.getElementById("rooms");
  var option = document.createElement("option");

  var selectCount = $('#rooms').children('option').length;
  console.log(selectCount);
  console.log(typeof selectCount);

  var addOption = selectCount + 1;
  console.log(addOption);
  console.log(typeof addOption);

  option.text = "部屋" + addOption;
  option.value = "room" + addOption;

  parent.appendChild(option);

}
