// //Always define camel case to methods and functions
// //function getTodayTemp() {
// // console.log("Hi...");
// //}
// //getTodayTemp();
// //var getTodayTemp = () => {
// //console.log("Hi...");
// //};
// //getTodayTemp();
// var division = (arg1, arg2) => {
//   console.log(arg1 / arg2);
// };
// var multiply = (mul1, mul2) => {
//   // var multi=mul1*mul2;//
//   return division(mul1, mul2);
// };
// var addition = (add1, add2) => {
//   return multiply(add1, add2);
// };
// var subtraction = (sub1, sub2) => {
//   return addition(sub1, sub2);
// };
// var result = (r1) => {
//   // console.log(r1(20,5));
//   var res = r1(25, 5);
// };
// result(subtraction);

// var multiply = (mul1, mul2, sub3) => {
//   return mul1 * mul2 * sub3;
// };
// var subtraction = (sub1, sub2, add3) => {
//   var sub3 = sub1 - sub2;
//   return multiply(sub1, sub2, sub3);
// };
// let addition = (add1, add2) => {
//   var add3 = add1 + add2;
//   return subtraction(add1, add2, add3);
// };

//map methods
// map() creates a new array from calling a function for every array element.

// map() calls a function once for each element in an array.

// map() does not execute the function for empty elements.

// map() does not change the original array.
let arr1 = [2, 3, 5, 7];

// arr.map(function (element, index, array) {
//   console.log(element);
//   console.log(index);
//   console.log(array);
//   return element;
// }, 80);
//var arr = [5, 6, 7, 8];
//var modarr = arr.map(function (element) {
//return element * 8;
//});
// console.log(modarr);
//  var arr2={name:"renu",working:"yes",place:"Hyd",
// name:"syama",working:"yes",place:"Hyd",
// name:"Prasad",working:"yes",place:"Hyd"};
// var arr3= arr2.map(function(element){
//     return {element.name} {element.working} {element.place};
// })
// console.log(arr3);

// var details = ["iam", "Renu", "from", "Hyd"];
// var mapMethod = (value, index) => {
//   console.log(value, index);
// };
// details.map(mapMethod);

var students = [
  { name: "renu", age: 28 },
  { name: "Avinash", age: 18 },
  { name: "Raju", age: 30 },
];
students.map((value, index) => {
  console.log(value.name, index);
});
