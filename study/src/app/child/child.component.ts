import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {


  @Input()
  counter:number = 0
  
  @Output()
  counterChange = new EventEmitter<number>()
  

  incrementCount() {
   this.counterChange.emit(this.counter+2)
 }

}
