// // function magic(condition, fun) {
// //   if (condition) {
// //     fun();
// //   }
// // }
// // var x = 1;
// // magic(x === 1, sayXIsOne);
// // magic(x > 0 && x < 10, sayXIsInbetween0and10);
// // function sayXIsOne() {
// //   console.log("x is 1 now");
// // }
// // function sayXIsInbetween0and10() {
// //   console.log("x is in between 1 and 10");
// // }
// function magic(condition, fun) {
//   if (condition) {
//     fun();
//   }
// }
// var x = 1;
// magic(x === 1, function () {
//   console.log("x is 1 $$$$$$");
// });
// magic(x > 0 && x < 10, function () {
//   console.log("x is inbeteween 0 and 10 @@@@@@@");
// });
// //var magic = (condition, fun1, fun2) => (condition ? fun() : null);
// // var x = 1;
// // var add = () => {
// //   console.log("add function");
// //   return "add";
// // };
// // var sub = () => {
// //   console.log("sub function");
// //   return "sub";
// // };
// // magic(x === 1, add, sub);
// // magic(x === 1, () => console.log("x is 1 (mapfun)"));
// // magic(x > 0 && x < 10, () => console.log("x is inbetwee"));
// var magic = (condition, fun1, fun2) => (condition ? fun1() : fun2());
// var x = 18;
// magic(
//   x === 1,
//   () => {
//     console.log("add function");
//     return "add";
//   },
//   () => {
//     console.log("sub function");
//     return "sub";
//   }
// );
// function printMessageNTimes(msg, no) {
//   for (var i = 1; i <= no; i++) {
//     console.log(msg);
//   }
// }
// function getNthLetter(msg, no) {
//   return msg.charAt(no);
// }
// function getMyString(msg, no) {
//   return msg.substring(0, no);
// }
// printMessageNTimes("Renu", 6);
// console.log(getNthLetter("Javascript", 6));
// console.log(getMyString("i love javascript world", 11));

// function printMessageNTimes(msg, no) {
//   if (no != null && typeof no === "number") {
//     if (msg != null && typeof msg === "string") {
//       for (var i = 1; i <= no; i++) {
//         console.log(msg);
//       }
//     }
//   }
// }
// function getNthLetter(msg, no) {
//   if (no != null && typeof no === "number") {
//     if (msg != null && typeof msg === "string") {
//       return msg.charAt(no);
//     }
//   }
// }
// function getMyString(msg, no) {
//   if (no != null && typeof no === "number") {
//     if (msg != null && typeof msg === "string") {
//       return msg.substring(0, no);
//     }
//   }
// }
// printMessageNTimes("Prudhvi", 3);
// console.log(getNthLetter("JavaScript", 6));
// console.log(getMyString("I love JavaScript world", 11));

// function magic(fun, msg, no) {
//   if (no != null && typeof no === "number") {
//     if (msg != null && typeof msg === "string") {
//       return fun(msg, no);
//     }
//   }
// }
// function printMessageNTimes(msg, no) {
//   for (var i = 1; i <= no; i++) {
//     console.log(msg);
//   }
// }
// var getNthLetter = (msg, no) => msg.charAt(no);
// var getMyString = (msg, no) => msg.substring(0, no);

// magic(printMessageNTimes, "Chaitali", 7);
// console.log(magic(getNthLetter, "JavaScript", 6));
// console.log(magic(getMyString, "I love JavaScript world", 20));

// function  createCounter(){
//   var count=0;
//   return{
//     incremen:function(){
//       count++;
//     }
//     decrement:function(){
//       count--;
//     }
//     currentCount:function(){
//       return count;
//     }
//   };
// }
// var myCounter = createCounter();
// console.log(myCounter.currentCount());//10
// myCounter.increment();
// myCounter.increment();
// myCounter.increment();
// myCounter.increment();
// console.log(myCounter.currentCount());//14
// myCounter.decriment();
// myCounter.decriment();
// console.log(myCounter.currentCount());//12

// var employees = [
//   { id: 1, sal: 150, lastPaidDate: new Date(2021, 3, 1) },

//   { id: 2, sal: 450, lastPaidDate: new Date(2021, 2, 1) },

//   { id: 3, sal: 350, lastPaidDate: new Date(2021, 2, 1) },

//   { id: 4, sal: 650, lastPaidDate: new Date(2021, 3, 1) },
// ];
// var march1st = new Date(2021, 3, 1);
// var due = 0;
// employees.forEach((emp) => {
//   if (new Date(emp.lastPaidDate) < march1st) {
//     due += emp.sal;
//   }
// });
// console.log(due);

// due = employees.reduce((prevalue, emp) => {
//   if (new Date(emp.lastPaidDate) < march1st) {
//     return emp.sal + prevalue;
//   }
//   return prevalue;
// }, 0);
// console.log(due);
// var due1 = 0;
// var feb = new Date(2021, 3, 1);
// employees.forEach((emp) => {
//   if (new Date(emp.lastPaidDate) < feb) {
//     due1 += emp.sal;
//   }
// });
// console.log(due1);
// // var data = {};
// function setKeyValue(key, value) {
//   data[key] = value;
//   console.log(data);
// }
// setKeyValue("first", "dhoni");
// var players = {};
// //var fun = 0;

// //console.log(fun);
// function addPlayer(key, player) {
//   players[key] = player;
// }
// function getPlayer(key) {
//   return players[key];
// }
// addPlayer(1, { id: 10, name: "renu" });
// addPlayer(3, { id: 12, name: "renu" });

// addPlayer(2, { id: 11, name: "kisan" });
//console.log(getPlayer(1));
var employees = [
  { id: 1, sal: 150, lastPaidDate: "2021-03-01" },
  { id: 2, sal: 450, lastPaidDate: "2021-01-01" },
  { id: 3, sal: 350, lastPaidDate: "2021-02-01" },
  { id: 4, sal: 650, lastPaidDate: "2020-12-01" },
  { id: 5, sal: 350, lastPaidDate: "2021-02-01" },
  { id: 6, sal: 750, lastPaidDate: "2021-03-01" },
];
var total = 0;
//var newDate = lastPaidDate(2021 - 01 - 01);
// employees.forEach((emp) => {
//   if (emp.lastPaidDate == "2021-03-01") {
//     total = emp.lastPaidDate + emp.sal;
//   }
// });
// console.log(total);\
var dates = {};
// employees.forEach((emp) => {
//   if (emp.lastPaidDate in dates) {
//     dates[emp.lastPaidDate] += emp.sal;
//   } else {
//     dates[emp.lastPaidDate] = emp.sal;
//   }
// });
var salary = employees.reduce((addsalary, emp) => {
  if (emp.lastPaidDate in dates) {
    dates[emp.lastPaidDate] += emp.sal;
  } else {
    dates[emp.lastPaidDate] = emp.sal;
  }
});
console.log(dates);
// console.log(dates);
// var dates = {};
// employees.forEach((emp) => {
//   if (emp.lastPaidDate in dates) {
//     dates[emp.id] += emp.sal;
//   } else {
//     dates[emp.id] = emp.sal;
//   }
// });
// console.log(dates);
// <--------higher order functions-->
// function magic(arg1, arg2) {
//   var xreturnvalue = x();
//   var yreturnValue = y();
//   return function (arg3) {
//     return xreturnvalue + yreturnValue + arg3;
//   };
// }
// function x() {
//   console.log("x function");
//   return "x()";
// }
// function y() {
//   console.log("y function");
//   return "y()";
// }
// console.log(magic(x, y)(3000000));
