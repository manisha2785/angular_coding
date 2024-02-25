const { TmplAstVariable } = require("@angular/compiler");
const { UrlSerializer } = require("@angular/router");
const { idText } = require("typescript");

a=["1","2","3"];
b=["1","2","6"];
b.forEach(element => {
      flag=false;
      a.forEach(elementinA=>{

         console.log(elementinA);

          if(element==elementinA)
          {
            flag=true;
          }

      })
      if(flag){
         a.push(element);
      }
      
  });
console.log(a);

==================

select * from  user inner join orders where user.id=orders.id;