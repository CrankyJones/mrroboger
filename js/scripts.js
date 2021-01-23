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
    const numReturn = numList.join(', ');
    return numReturn;
  }
}

function nameChk(input) {
  if (/[^0-9]/.test(input)) {
    return true;
  } else {
    return false;
  }
}

function numChk(input) {
  if (/[0-9]/.test(input)) {
    return true;
  } else {
    alert("Please enter a number.");
  }
}

$(document).ready(function () {
  $('#form').submit(function (event) {
    event.preventDefault();
    const input = parseInt($('#userInput').val());
    const name = $('#userName').val();
    if (nameChk(name) == true && numChk(input) == true) {
      let modal = document.getElementById("greetingsModal");
      let closeX = document.getElementsByClassName("closeX")[0];
      modal.style.display = "block";
      closeX.onclick = function () {
        modal.style.display = "none";
      }
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
      const output = roboger(name, input);
      $("#greeting").text(output);
    } else if (nameChk(name) == false) {
      let modal = document.getElementById("robotModal");
      let closeX = document.getElementsByClassName("closeX2")[0];
      modal.style.display = "block";
      closeX.onclick = function () {
        modal.style.display = "none";
      }
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    }
  });
});



