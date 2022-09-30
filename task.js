var arr = [
  "renu",
  "hyd",
  "venkata",
  "sri",
  "node",
  "react",
  "js",
  "kakinada",
  "proclink",
  "html",
];
var arr1 = [];
var arr2 = [];
arr.map((ele) => {
  if (ele.length <= 7) {
    arr1.push(ele);
  }
  if (ele.length > 7) {
    arr2.push(ele);
  }
});
console.log(arr1);
console.log(arr2);
console.log(arr1.join("-"));
console.log(arr2.join("-"));
