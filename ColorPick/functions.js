// functions from random color project
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getRandomRgbColor() {
  let a = getRandomInt(0, 255);
  let b = getRandomInt(0, 255);
  let c = getRandomInt(0, 255);

  return `rgb(${a}, ${b}, ${c})`;
}
//*********** */

// Take color and set it as body background
function changeBodyColor(color) {
  body.style.background = color;
}

function showHelp() {
  const helpContent =
    "Tlačítko NÁHODNĚ - vygeneruje náhodnou barvu<br>Barevné tlačíko - možnost výběru vlastní barvy";

  let helpDiv = document.querySelector("#help");
  helpDiv.style.color = "white";
  if (helpDiv.innerHTML === "") {
    helpDiv.innerHTML = helpContent;
    helpDiv.style.padding = "20px 0";
  } else {
    helpDiv.innerHTML = "";
    helpDiv.style.padding = "0";
  }
}
