const reviews = [
  {
    firstName: "Jana",
    lastName: "Nováková",
    photo: "1.jpg",
    job: "malířka",
    text: "Jsem naprosto spokojená, mohu si sama spravovat svou webovou prezentaci. Kdykoliv mám nějaké dotazy, ochotná podpora WebRychle mi vždy obratem odpoví.",
  },
  {
    firstName: "Petr",
    lastName: "Dvořák Novotný",
    photo: "2.jpg",
    job: "truhlář",
    text: "Tým WebRychle mi se vším pomohl a navíc mi dali slevu, protože jsem si objednal ještě další web.",
  },
  {
    firstName: "Jan",
    lastName: "Pacovský",
    photo: "3.jpg",
    job: "instalatér",
    text: "Svoji práci mohu přehledně prezentovat na webu a nemusím platit desetiticíce. Doporučuji",
  },
];
const rwImg = document.getElementById("rw-person-img");
const rwName = document.getElementById("rw-name");
const rwJob = (document.getElementById("rw-job"));
const rwInfo = document.getElementById("rw-text");

const prevBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");

let currentItem = 0;
// load initial review
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  rwImg.src = item.photo;
  rwName.textContent = `${item.firstName} ${item.lastName}`;
  rwJob.textContent = item.job.toUpperCase();
  rwInfo.textContent = item.text;
});
// prev review
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
//next review
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// function to show person based on item number
function showPerson(person) {
  const item = reviews[currentItem];
  rwImg.src = item.photo;
  rwName.textContent = `${item.firstName} ${item.lastName}`;
  rwJob.textContent = item.job;
  rwInfo.textContent = item.text;
}
// autoplay pause or play
//maybe in future
