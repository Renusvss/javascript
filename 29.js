// var x = 1;
// if (x == 1) {
//   var x = 2;
//   console.log(x);
// }
// console.log(x);
//<!----block level scope in es6--->//
// let x = 1;
// if (x == 1) {
//   let x = 2;
//   console.log(x);
// }
// console.log(x);

let x = 1;
if (x == 1) {
  let x = 2;
  console.log("x=" + x);
}
console.log("x==" + x);
