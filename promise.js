//var now = 0;
// const getTemp = () => {
//   console.log("time in second");
// };
// setTimeout(getTemp, 5000);

// const getTemp = () => {
//   console.log("time in second");
// };
// setInterval(getTemp);
// define promise
//var now = 0;
// const methodOne = (arg1, arg2) => {
//   arg1(" iam resolve data");
//   arg2("this is rejected");
// };
// const resolve = (res) => {
//   console.log(res);
// };
// const reject = (res) => {
//   console.log(res);
// };
// methodOne(resolve, reject);
var promissObj = new Promise((right, wrong) => {
  // console.log(right, wrong);
  right("task is completed");
  //wrong("task failed");
});
//console.log(promissObj);
promissObj.then((response) => {
  console.log(response);
});
