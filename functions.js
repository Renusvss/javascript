//functions are used for code reusability
function nameFunction(arg1,arg2){
    console.log("This is function....",);
return arg1*arg2;
}
var out=nameFunction;
//console.log(out);
//var d =out(5,9);
//the result of out method is the arg of console
//console.log(out(4,5));
function Add(arg1){
    console.log("Add Function:",arg1(4,9));
}
//Add(3);
//Add(out);
//Add(nameFunction);
//Add(out());
//Add(nameFunction);
function subfunction (arg1,arg2){
    console.log(arg1-arg2);}
    function nameFunction(arg1,arg2){
        return subfunction;
    }
function Add(arg1){
    var out= arg1();
    out(5,3);
}
   // Add(nameFunction);
   function Multi(m1,m2){
    console.log(m1*m2);
   }
   function Result(r1,r2){
    return Multi(r1,r2);
   }
   function Whole(r1){
    console.log(r1(2,3));
   }

   Whole(Result);