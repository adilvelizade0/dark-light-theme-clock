"use strict";

let check = true;
function change() {
  if (!check) {
    document.querySelector("body").style.backgroundColor = "darkslategray";
    document.querySelector("body").style.color = "#fff";
    check = !check;
  } else {
    document.querySelector("body").style.backgroundColor = "#fff";
    document.querySelector("body").style.color = "darkslategray";
    check = !check;
  }
}

function relode() {
  document.querySelector("#timer").innerHTML = moment().format("LTS");
  document.querySelector("#calendar").innerHTML = moment().format("MMM Do YY");
}
relode();
setInterval(relode, 1000);
