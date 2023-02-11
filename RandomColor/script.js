function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getRandomRgbColor() 
{
  let a = getRandomInt(0, 255);
  let b = getRandomInt(0, 255);
  let c = getRandomInt(0, 255);
  
  return `rgb(${a}, ${b}, ${c})`;
}


document.body.style.backgroundColor = getRandomRgbColor()
document.getElementById("color").innerHTML =  getRandomRgbColor()

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(x);
