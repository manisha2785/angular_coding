import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadingModule } from './lazy-loading/lazy-loading.module';
import {EditFuncationalityComponent} from './edit-funcationality/edit-funcationality.component'
import{ViewChildComponent} from "./view-child/view-child.component";
import {IntervalComponent} from "./rxjs/promise/interval/interval.component"
import {RouterTestingComponent} from './directive_practise/router-testing/router-testing.component'
import { ParentcheckComponent } from './parentcheck/parentcheck.component';
import { ChildcheckComponent } from './childcheck/childcheck.component';
const routes: Routes = [
{
   path:'lazy-loading',
   loadChildren:()=>import('./lazy-loading/lazy-loading.module').then(m=>m.LazyLoadingModule)

},
{
  path:'edit',
  component:EditFuncationalityComponent
},
{
  path:'viewchild',
  component:ViewChildComponent
},
{
  path:'interval',
  component:ViewChildComponent
},
{
   path:'routerTesting',
   loadChildren:()=>import("./directive_practise/router-testing/router-testing.component").then((module)=>module.RouterTestingComponent)

},

{
  path:'parent',
  component:ParentcheckComponent
},
{
  path:'child',
  component:ChildcheckComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
