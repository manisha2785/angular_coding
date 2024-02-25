import { Directive,ElementRef } from "@angular/core";

@Directive({
    selector: '[new]'
  })
export class csDirective{

      constructor(el:ElementRef)
      {
         el.nativeElement.style.color="green";
      }
}