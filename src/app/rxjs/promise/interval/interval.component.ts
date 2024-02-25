import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent {
    intervalData;
    videoSubscription:Subscription;
    constructor()
    {   
    const data= interval(1000)
    this.videoSubscription=data.subscribe(item=>{
         this.intervalData=item;
         console.log( this.intervalData);
         if(this.intervalData>5)
         {
          this.videoSubscription.unsubscribe();
         }
    })
    

    }
   
}
