/* Scrabble function - calculates score of the word (EXERCISM.COM) */

function scrabble(word) {
  let arr = [];
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    arr[i] = word[i].toUpperCase();
  }

  //console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === "A" ||
      arr[i] === "E" ||
      arr[i] === "I" ||
      arr[i] === "O" ||
      arr[i] === "U" ||
      arr[i] === "L" ||
      arr[i] === "N" ||
      arr[i] === "R" ||
      arr[i] === "S" ||
      arr[i] === "T"
    ) {
      score = score + 1;
    } else if (arr[i] === "D" || arr[i] === "G") {
      score = score + 2;
    } else if (
      arr[i] === "B" ||
      arr[i] === "C" ||
      arr[i] === "M" ||
      arr[i] === "P"
    ) {
      score = score + 3;
    } else if (
      arr[i] === "F" ||
      arr[i] === "H" ||
      arr[i] === "V" ||
      arr[i] === "W" ||
      arr[i] === "Y"
    ) {
      score = score + 4;
    } else if (arr[i] === "K") {
      score = score + 5;
    } else if (arr[i] === "J" || arr[i] === "X") {
      score = score + 8;
    } else if (arr[i] === "Q" || arr[i] === "Z") {
      score = score + 10;
    } else score = 0;
  }

  return score;
}
//console.log(scrabble("cabbage"));
// GUI version
scoreForm = document.getElementById("score");
scoreForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let wordInput = event.target.elements.word.value;

  let wordDisplay = document.createElement("p");
  let score = scrabble(wordInput);

  /** ENGLISH version - p. for points*/
  let body = "p.";
  /* Sklonovani slova BODY */
  // if (score === 1) {
  //   body = "bod";
  // } else if (score >= 2 && score <= 4) {
  //   body = "body";
  // } else if (score >= 5) {
  //   body = "bodů";
  // }

  wordDisplay.textContent = `${wordInput} - ${score} ${body}`;
  let results = document.getElementById("results");
  results.appendChild(wordDisplay);
  event.target.elements.word.value = "";
});
