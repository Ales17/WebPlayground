let num = document.getElementById("number");
let all_btn = document.querySelectorAll(".button");
let count = 0;
all_btn.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    console.log(event.currentTarget.classList);
    const classList = event.currentTarget.classList;
    let name = event.target.getAttribute("name");
    if (classList.contains("plus")) {
      count++;
    } else if (classList.contains("minus")) {
      count--;
    } else {
      count = 0;
    }
    if (count === 0) {
      num.style.color = "black";
    } else if (count < 0) {
      num.style.color = "rgb(255,0,0)";
    } else if (count > 0) {
      num.style.color = "rgb(0,255,0)";
    }
    num.textContent = count;
  });
});
