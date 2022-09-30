// const { price, description } = {
//   title: "veg sandwich",
//   price: 400,
//   ingredients: ["bread", "cheese", "lettuce"],
// };
// console.log(price);
// console.log(description);
// //const [a, b, ...c] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// //const [a, , , b, ...c] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const [a, b, , , ...c] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(a);
// console.log(b);
// console.log(c);

const vacation = {
  destination: "delhi",
  travellers: 4,
  activity: "",
  cost: 2000000,
};
function vacationMarketing({ destination, activity }) {
  return `come to ${destination} will have fun and do some${activity}later`;
}
console.log(vacationMarketing(vacation));
function vacationgoing({ destination, cost }) {
  return `how much price for${destination} travaellingis around${cost}`;
}
console.log(vacationgoing(vacation));
