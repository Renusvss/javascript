function division(arg1,arg2){
    console.log(arg1/arg2);

}
function multiply(mul1,mul2)
{
   // var multi=mul1*mul2;//
   return division(mul1,mul2);
}
function addition(add1,add2)
{
 return multiply(add1,add2);
}
function subtraction(sub1,sub2)
{
    return addition(sub1,sub2);
}
function result(r1)
{
 // console.log(r1(20,5));  
var res=r1(25,5);
}
result(subtraction);