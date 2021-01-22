function roboger(name, input) {
  let numList = [];
  for (let i = 0; i <= input; i++) {
    if (/[3]/.test(i)) {
      numList.push("Won\'t you be my neigh-bot, "(name)"?");
    } else if (/[2]/.test(i)) {
      numList.push("Boop!");
    } else if (/[1]/.test(i)) {
      numList.push("Beep!");
    } else {
      numList.push(i);
    }
  }
  numList.join(", ");
  return numList;
}



$(document).ready(function () {
  $('#form').submit(function (event) {
    event.preventDefault();
    const input = $('#userInput').val();
    const name = $('#userName').val();
    const output = roboger(name, input);
    alert(output);
  });
});