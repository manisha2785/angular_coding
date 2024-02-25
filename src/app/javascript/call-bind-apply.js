let name={
    firstname:"Akshay",
    lastname:"siani",
   
}
printfullname= function(hoemtoewn)
{
    console.log("hii"+this.firstname+" "+this.lastname+"from"+hoemtoewn);
}
printfullname.call(name,"bhl","rajasthan");
let name2={
    firstname:"manisha",
    lastname:"gupta",
    //function
}

//functiona borrowing
// printfullname.call(name2,"btp","rajasthan");

//the only difference between call and apply is the wait its being called
// printfullname.apply(name2,["btp","rajasthan"]);


//bind methord bind function printfullname with object and return as copy of methord
let printMyName=printfullname.bind(name,"btp","rajasthan");
printMyName();
//basic differnce
//call methord invokes a function directly by passing in the refrence which poitns the this 
//apply takes second argument as array list of the parametehr 
//bond methord does not directly invlokes the methord but gives you copy of that function 