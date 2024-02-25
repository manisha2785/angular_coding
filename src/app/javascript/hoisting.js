/*
hoisting
==============================
console.log(a)
greet();
function greet()
{
    console.log("hello");
}

undefind 
hello

exection context has twophases moemory exectuation phase and code excectauion
in memory allocation phase a will stored as undefined 
function will defined as a whole body of fucntion
like 
  a: undefined
  fn:greet
   

  to move your declarion above is hoistinhg,u can cal function before defining it
-----
function expression is inside a varaible
car add=function(a,b)
{
    console.log(a+b);
}
add(3,4)
u can not call function expression before defining it
-------------



*/




