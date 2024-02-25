import {Directive,ElementRef} from '@angular/core';
@Directive({

    selector:'[appHighligh]'
})

export class testDirective{
    elemntref:any;
      constructor(elemntref:ElementRef)
      {
        this.elemntref.nativeElement.style.backgroundcolr='red';
      }
}