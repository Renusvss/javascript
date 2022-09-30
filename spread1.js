// function total(x, y, z) {
//   return x + y + z;
// }
// const nos = [1, 2, 3];
// console.log("total is : " + total(nos[0], nos[1], nos[2]));
// console.log("sum is " + total(...nos));

// const dogs = ["d1", "d2", "d3", "d4"];
// const cats = ["c1", "c2", "c3", "c4", "c5"];
// const animals = ["tiger", dogs, "zebra", "pig"];
// console.log(animals);
// const animals2 = [["tiger", ...cats, ...dogs, "zebra", "pig"]];
// console.log(animals2);
//destructuring with spread operator
const data = {};
function setKeyAndValue(data, { key, value }) {
  return {
    ...data,
    [key]: value,
  };
}
let currentobj = setKeyAndValue(data, { key: "name", value: "dhoni" });
console.log(currentobj);
console.log("-------------------");
currentobj = setKeyAndValue(currentobj, { key: "type", value: "dhoni" });
console.log(currentobj);
