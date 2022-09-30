var data = [1, 2, 3, 4, 5];
var data1 = ["renu", 27, "hyd", 500];
//console.log(data1.includes(500));
//console.log(data1.concat("HYD"));
//console.log(data1.concat([2]));
// console.log(data1.push("kkd"));
// console.log(data1);
// console.log(data1.pop());
// console.log(data1.indexOf());
//console.log(data1.slice(2, 4));
//console.log(data1.slice(0, 2));
//console.log(typeof data);
// var dat = ["node", "js", "react", "js"];
// var temp = [];
// dat.map((ele, ind) => {
//   if (temp.includes(ele) === false) {
//     temp.push(ele);
//   }
// });
// console.log(temp);
//dat3 = "iam renu";
//console.log(dat3.includes("renu"));
var url = "www.proclink.com";

// if (url.indexOf("https") == 0) {
//   console.log("exists");
// } else {
//   console.log("doesnt exist");
// }
//console.log(url.lastIndexOf());
// var url1 = [];
// if (url.indexOf("http://") == 0 || url.indexOf("https://"))
//   console.log("This is URl");
// url1 = url.split(".");
// console.log(url1);
// console.log(url1[url1.length - 1]);

//var date = "29-11-1994";
//let dte = [];
//if()
// dte = date.split("-");
// console.log(dte);
// console.log(dte.reverse());
// console.log(dte.join("-"));
dat1 = "345fedfd4343";
console.log(parseInt(dat1));
dat1 = dat1.split("");
console.log(dat1);
res = "";
dat1.map((a) => {
  if (isNaN(parseInt(a)) === true) {
    res = res + a;
  }
});
console.log(res);
