let display = document.querySelector(".display");
console.log(display);

let numKeys = document.querySelectorAll(".key-num");
console.log(numKeys);
let signKeys = document.querySelectorAll(".key-sign");
let cKey = document.querySelector(".key-c");

function evil(fn) {
  return new Function("return " + fn)();
}

numKeys.forEach((element) => {
  element.addEventListener("click", function (e) {
    display.textContent += e.target.dataset.num;
  });
});

document.querySelector(".key-equal").addEventListener("click", function (e) {
  try {
    math.evaluate(display.textContent);
  } catch (error) {
    display.textContent = ("Error")
  }

  display.textContent = math.evaluate(display.textContent);
});

signKeys.forEach((element) => {
  element.addEventListener("click", function (e) {
    console.log(e.target.dataset.num);
    display.textContent = display.textContent + e.target.dataset.num;
  });
});

cKey.addEventListener("click", function (e) {
  display.textContent = "";
});
