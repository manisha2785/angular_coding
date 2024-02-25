import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childcheck',
  templateUrl: './childcheck.component.html',
  styleUrls: ['./childcheck.component.css']
})
export class ChildcheckComponent {
   @Output() color:any =new EventEmitter();
   colorCahnge:string;
   colorchange(params) {
      console.log("params");
      console.log(params);
   }
}
