import { Component } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

   public show()
   {
        console.log("hiii");
        alert("i am in show")
   }
}
