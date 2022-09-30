var x = {
  foo: "bar",
};
4;
var y = x;
5;
x.foo = "Something else";
6;
console.log(y.foo); // Something else
7;
console.log(x === y);
