import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LazyDemoComponent } from './lazy-demo/lazy-demo.component';
import { EditFuncationalityComponent } from './edit-funcationality/edit-funcationality.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { PractiseComponent } from './practise/practise.component';
import {CustomDirectiveDirective} from './directive/custom-directive.directive';
import {csDirective} from './directive/csDirective.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {HeadersInterceptor} from "./interceptor/headers.interceptor";
import { IntervalComponent } from './rxjs/promise/interval/interval.component'
import { testDirective } from './directive_practise/testDirective';
import { RouterTestingComponent } from './directive_practise/router-testing/router-testing.component';
import { ParentcheckComponent } from './parentcheck/parentcheck.component';
import { ChildcheckComponent } from './childcheck/childcheck.component';
@NgModule({
  declarations: [
    AppComponent,
    LazyDemoComponent,
    EditFuncationalityComponent,
    ViewChildComponent,
    ChildComponentComponent,
    PractiseComponent,
    CustomDirectiveDirective,
    CustomDirectiveDirective,
    csDirective,
    IntervalComponent,
    testDirective,
    RouterTestingComponent,
    ParentcheckComponent,
    ChildcheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HeadersInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
