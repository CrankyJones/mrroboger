function roboger(input) {
  let numList = [];  
  for (let i=0; i<=input; i++) {
    if (/[3]/.test(i)) {
      numList.push("Won't you be my neigh-bot?")
    } else {
    numList.push(i);
    }
  }
  numList.join(", ");
  return numList;
}



$(document).ready(function() {
  $('#form').submit(function (event) {
    event.preventDefault();
    const input = $('#userInput').val();
    const output = roboger(input);
    alert(output);
  });
});