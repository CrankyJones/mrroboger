function roboger(name, input) {
  let numList = [];
  if (name === "") {
    alert("Please enter your name.");
  } else if (input === "") {
    alert("Please enter a number.");
  } else {
    for (let i = 0; i <= input; i++) {
      if (/[3]/.test(i)) {
        numList.push("Won\'t you be my neigh-bot, " + name + "?");
      } else if (/[2]/.test(i)) {
        numList.push("Boop!");
      } else if (/[1]/.test(i)) {
        numList.push("Beep!");
      } else {
        numList.push(i);
      }
    }
    let numReturn = numList.join(', ');
    return numReturn;
  }
}



$(document).ready(function () {
  $('#form').submit(function (event) {
    event.preventDefault();
   // $("#greeting").hide();
    const input = $('#userInput').val();
    const name = $('#userName').val();
    const output = roboger(name, input);
    let modal = document.getElementById("greetingsModal");
    let closeX = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    closeX.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }        
    $("#greeting").text(output);
  });
});

