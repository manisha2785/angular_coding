import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-funcationality',
  templateUrl: './edit-funcationality.component.html',
  styleUrls: ['./edit-funcationality.component.css']
})
export class EditFuncationalityComponent {
  message="program to edit a object";
  obj={
    "totalItems": 2,
    "items": [
      {
        "id": 1,
        "name": "foo"
  
      },
      {
        "id": 2,
        "name": "bar"
      },
      {
        "id": 2,
        "name": "bar"
      },
      {
        "id": 3,
        "name": "bar"
      },
      {
        "id": 4,
        "name": "bar"
      },
      ]
  };
  constructor() { }

  ngOnInit() {
      console.log("obj to be iterate");
      console.log(this.obj);
  }

  public changeItem(id: number)
  {
    console.log("id");
    console.log(id);
    alert(id);
  }

 }
