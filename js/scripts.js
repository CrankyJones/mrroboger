function roboger(input) {
let numList = [];  
for (let i=0; i<=input; i++) {
  numList.push(i);
  }
  numList.join('');
  return numList;
}



$(document).ready(function() {
  $('#form').submit(function (event) {
    event.preventDefault();
    const input = $('#userInput').val();
    const output = roboger(input);
    alert(output);
  })
})