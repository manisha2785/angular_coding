// var a=21
// var a=35
// console.log(a);

/////output 35

var a=35
console.log(a);
if(a===35)
{
    var b=40;

    console.log(b);
}
console.log(b);  //oupt40
//variable declared with var keyword are not block scope they are function scrope
//means we can access outside block
//bewlow is the example for function scope
function test()
{
    var c=100;
    console.log(c);
}
test();
console.log(c);
//we sholdhave variable with blcked scope due to security pupose 
//for this let came in to existence