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

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
emps.appendChild(table);

// Creating and adding data to first row of the table
let row_1 = document.createElement("tr");
let heading_1 = document.createElement("th");
heading_1.innerHTML = "Jméno";
let heading_2 = document.createElement("th");
heading_2.innerHTML = "Příchod";
let heading_3 = document.createElement("th");
heading_3.innerHTML = "Odchod";
let heading_4 = document.createElement("th");
heading_4.innerHTML = "Počet hodin";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
thead.appendChild(row_1);

function addEmp(fName, begin, end) {
  empTime = end - begin;

  employees.push({
    firstName: fName,
    beginTime: begin,
    endTime: end,
    hours: end - begin,
  });

  totalTime = totalTime + empTime;

  // Creating and adding data to second row of the table
  let row_2 = document.createElement("tr");
  let row_2_data_1 = document.createElement("td");
  row_2_data_1.innerHTML = `${fName}`;
  let row_2_data_2 = document.createElement("td");
  row_2_data_2.innerHTML = `${begin}`;
  let row_2_data_3 = document.createElement("td");
  row_2_data_3.innerHTML = `${end}`;
  let row_2_data_4 = document.createElement("td");
  row_2_data_4.innerHTML = empTime;

  row_2.appendChild(row_2_data_1);
  row_2.appendChild(row_2_data_2);
  row_2.appendChild(row_2_data_3);
  row_2.appendChild(row_2_data_4);
  tbody.appendChild(row_2);

  // totalDisplay.textContent = `Součet hodin všech: ${totalTime}`;

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

  if (employees.length != 0) {
    let amount = event.target.amount.value;

    jedendil = amount / totalTime;

    tips.innerHTML = `<b>Jeden díl:</b> ${jedendil} Kč`;

    employees.forEach((element) => {
      let empMoney = document.createElement("p");
      empMoney.textContent = `${element.firstName} ${
        element.hours * jedendil
      } Kč`;
      tips.appendChild(empMoney);
    });
  } else alert("Musíte zadat aspoň jednoho pracovníka");
});
// MAYBE FEATURE IN FUTURE - SENDING TODAY TIPS TO EMAIL - MAILTO
// let sendMail = document.getElementById("send-mail");
// sendMail.addEventListener("click", function () {
//   date = "1.1.1889"
//   window.open(`mailto:test@example.com?subject=Dýška park ${date}&body=${employees}`);
// });
