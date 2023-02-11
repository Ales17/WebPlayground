/** HTML DOM CONNECT */
/* FIRST FORM */
const empForm = document.getElementById("emp-form");
const tips = document.getElementById("tips");
/* EMPLOYEE DISPLAY */
const emps = document.querySelector("#emps");
const totalDisplay = document.querySelector("#total-time");
/* ******************** */

// INITIALIZE VARIABLES
let empList = document.createElement("p");
let totalTime = 0;
let jedendil = 0;

// ARRAY OF OBJECTS TO SAVE AN EMPLOYEE
let employees = [];

let count = 1;
function addEmp(fName, begin, end) {
  empTime = end - begin;

  employees.push({
    number: count,
    firstName: fName,
    beginTime: begin,
    endTime: end,
    hours: end - begin,
  });
  count++;
  totalTime = totalTime + empTime;

  empList.innerHTML =
    empList.innerHTML + `${fName}, ${begin}-${end} (${empTime} h celkem)<br>`;
  emps.appendChild(empList);
  totalDisplay.textContent = `Součet hodin všech: ${totalTime}`;

  console.log(employees);
}
/* First form listener - user fills name, start time, end time and adds the emp to a list */
empForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let empName = event.target.empname.value;
  let begin = Number(event.target.timebegin.value);
  let end = Number(event.target.timeend.value);

  if (begin < end) {
    addEmp(empName, begin, end);
    event.target.empname.value = "";
    event.target.timebegin.value = "";
    event.target.timeend.value = "";
  } else alert("Začátek nemůže být déle než konec.");
});
/* Second form listener - user sets amount, it will gives him amounts how many to give to emp */
let amountForm = document.getElementById("amount-form");
amountForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let amount = (event.target.amount.value / 100) * 3;

  /* Vsechna dyska deleno odpracovane hodiny vsech */
  jedendil = Math.floor(amount / totalTime);

  tips.innerHTML = `<b>3 % z tržby:</b> ${amount} Kč`;

  employees.forEach((element) => {
    let empMoney = document.createElement("p");
    empMoney.id = `emp-${element.number}`;
    empMoney.textContent = `${element.firstName} ${
      element.hours * jedendil
    } Kč`;
    tips.appendChild(empMoney);
  });
});
// MAYBE FEATURE IN FUTURE - SENDING TODAY TIPS TO EMAIL - MAILTO
// let sendMail = document.getElementById("send-mail");
// sendMail.addEventListener("click", function () {
//   date = "1.1.1889"
//   window.open(`mailto:test@example.com?subject=Dýška park ${date}&body=${employees}`);
// });
