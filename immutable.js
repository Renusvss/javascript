//mutable means change values is possible without creating new value.
//in java script objects and arrays are mutable means we can add new key value pair to objects as well.
// Immutable means opposite to mutable .and it can be possible through frozen method.
//if any object is defined as immutable then modifcation,deleting nothing is immpossible .
//const cannot be reassigned
//example of immutable in arrays
const users = ["mobile", "android", 10000];
Object.freeze(users);
users.push("gh");
console.log(users);
users.pop();
//string and array are immutable as number value cannot  be changed and string also but the
//functions which were applied on string never change the original value  like concat,trim etc.
//mutable are objects and arrays as per above example we can modify ,update values and types as well
// map and filter are immutable as they create new values without changing the exoisting value.
//in es5 object.feeze is used for immutable (objects and arrays).
//but has problems so in es6 Object.assign is used.
