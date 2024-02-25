import { Component,ViewChild,AfterViewInit,ElementRef,ViewChildren,QueryList } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements AfterViewInit {
  // @ViewChild('name')
  //  name={} as ElementRef
  @ViewChild('name') name:ElementRef
   @ViewChild(ChildComponentComponent) sub: ChildComponentComponent;
 
	// private elName = {} as ElementRef;
  update() {
    this.sub.show();
   
  }
  ngOnInit() {
    console.log('on init', this.sub);
    // this returns undefined
  }
   ngAfterViewInit(): void {
    this.name.nativeElement.style.color='blue'
    // this.sub.show()
   
  }
  
}
