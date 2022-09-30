// function add(a, b = 1) {
//   return a + b;
// }
// console.log(add(9));
//2way
// function add(a, b) {
//   if (b === undefined) {
//     b = 1;
//     return a + b;
//   }
// }

// console.log(add());
//3way
function add(a,b){
  b= (typeof b!=="undefined"?b=1);
  return a+b;
}
console.log(add(4));
console.log(add(4,5));
