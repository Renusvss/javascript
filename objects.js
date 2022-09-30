var obj={name:"react",name:"node",age:26,details:{email:"renu@gmail.com",address:{pin:1997}}};
// //console.log(obj);
// //console.log(obj.age);
// //console.log(obj["name"]);
var age="details";
// //console.log(obj[age]);
// //console.log(obj.details);
// //console.log(obj.details.email);
// //console.log(obj["details"]["email"]);
// //console.log(obj.details);
// //console.log(obj["details"]["address"]["pin"]);
// //obj.language="JAVA";
var language="programming";
// //obj[language]="NODEJS";
// //console.log(obj);
// obj.name1="Venkata";
// console.log(obj);
// var name1="srisai";
// obj[name1]="Renusvss";
// console.log(obj);
obj["programming"]={};
obj["programming"]["code"]="yes";
//console.log(obj["programming"]);
obj["programming"]["code"]="hello";
//console.log(obj["programming"]);
//operator spread -- this will hold data of another container as well--//
//Object is a class in JS Oject.keys will give all keynames of a particular object name//
let keys=Object.keys(obj);
//console.log(keys);
console.log(obj);

