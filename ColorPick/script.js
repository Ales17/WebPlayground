const body = document.querySelector("body");

const randomBtn = document.getElementById("random");
console.log(randomBtn);

// Set bg color on load
// Defautl value (black) of color picker
let onLoadColor = document.getElementById("color2").value;

window.addEventListener("load", changeBodyColor(onLoadColor));
// Setting color from picker by submitting the form
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let color2 =  e.target.color2.value ;
//   changeBodyColor(color2);
// });

let colorPicker = document.getElementById("color2");
colorPicker.addEventListener("input", function (e) {
  changeBodyColor(e.target.value);
});

randomBtn.addEventListener("click", function (e) {
  changeBodyColor(getRandomRgbColor());
});

const helpBtn = document.getElementById("help-btn");

helpBtn.addEventListener("click", showHelp);

// // // Change title when user switches to another tab
// // let title = document.querySelector("title");
// // const originalTitle = title.textContent;

// // document.addEventListener("visibilitychange", (event) => {
// //   if (document.visibilityState == "visible") {
// //     title.textContent = originalTitle;
// //   } else {
// //     title.textContent = "Chybíte nám, vraťte se ;(";
// //   }
// // });
