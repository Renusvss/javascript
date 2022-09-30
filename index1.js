//var players = require("./player.json");
var players = require("./player1.json");
var arr = [];
// var funmap = (key, value) => {
//   arr = players[key];
// };
// funmap(1);
// console.log(arr);
// function getPlayers() {
//   console.log("keys---->" + Object.keys(players));
//   Object.keys(players).forEach((id) =>
//     console.log(
//       players[id].id + " " + players[id].name + " " + players[id].category
//     )
//   );
// }
// getPlayers();

// players.forEach((emp) => {
//   console.log(emp.id + "" + emp.name + "" + emp.currency + "" + emp.salary);
// });
var data = [];
var temp = 0;
var count = 0;
// players.forEach((emp) => {
//   if (emp.currency === "INR") {
//     count += emp.salary;
//     count = toFixed(2);
//     data[emp.currency] = count;
//   }
//   if (emp.currency === "USD") {
//     temp += emp.salary;
//     temp = parseInt(temp);
//     data[emp.currency] = temp;
//   }
// });
// console.log(data);
// var salaries = players.reduce(
//   (accumulator, emp) => {
//     if (emp.currency === "INR" || emp.currency === "USD") {
//       accumulator[emp.currency] += emp.salary;
//     }
//     return accumulator;
//   },
//   { INR: 0, USD: 0 }
// );
// console.log(salaries.INR.toFixed(2) + "   " + salaries.USD);
// var employ = players.filter((emp) => {
//   if (emp.currency === "INR" || emp.currency === "GBP")
//     console.log(emp.id + "" + emp.name + "" + emp.salary + "" + emp.currency);
//   //console.log(data);
// });
//console.log(data);
var expectedCurrencies = ["INR", "GBP"];
// var empList = players.filter((emp) =>
//   expectedCurrencies.includes(emp.currency)
// );
// empList.forEach((emp) => {
//   console.log(emp.id + "" + emp.name + "" + emp.salary + "" + emp.currency);
// });
// var empList1 = players.filter((emp) =>
//   expectedCurrencies.includes(emp.currency)
// );
// empList1 = empList1.sort((e1, e2) => e1.salary - e2.salary);
// empList1.forEach((emp) => {
//   console.log(emp.id + "" + emp.name + "" + emp.salary + "" + emp.currency);
// });
// var data1 = {};
// players.forEach((emp) => {
//   if (!data.currency) {
//     data1.push(emp);
//   }
// });
// console.log(data1);
// var currenciesListed = {};
// var empList = players.filter((emp) => {
//   if (!(emp.currency in currenciesListed)) {
//     currenciesListed[emp.currency] = false;
//     return true;
//   } else if (emp.currency in currenciesListed) {
//     console.log(emp.id + "" + emp.name + "" + emp.salary + "" + emp.currency);
//   } else {
//     console.log(emp.id + "" + emp.name + "" + emp.salary + "" + emp.currency);
//   }
//   return false;
// });
// empList.forEach((emp) => {
//   console.log(emp.id + "" + emp.name + "" + emp.salary + "" + emp.currency);
// });
const currenciesListed = {};
const empList = players.filter((employee) => {
  if (currenciesListed[employee.currency] === true) {
    currenciesListed[employee.currency] = false;
    return true;
  } else {
    currenciesListed[employee.currency] = true;
    return false;
  }
});
empList.forEach((emp) => {
  console.log(emp.id + "" + emp.name + "" + emp.salary + "" + emp.currency);
});
