import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterTestingComponent } from '../directive_practise/router-testing/router-testing.component';
const routes: Routes = [
{path:'',  component:RouterTestingComponent}
  
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RoutingPracticeModule { }
