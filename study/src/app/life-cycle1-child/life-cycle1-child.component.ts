import { Component, Input, OnInit,OnChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle1-child',
  templateUrl: './life-cycle1-child.component.html',
  styleUrls: ['./life-cycle1-child.component.scss']
})
export class LifeCycle1ChildComponent implements OnInit,OnChanges {

  @Input()
    title='startTitle'
    
  constructor() {
    // console.log('Це в child constructor      ', this.title)
  };
  
  ngOnChanges() {
    // console.log('Це в child ngOnChanges        ', this.title)
  };

  ngOnInit(): void {
    // console.log('Це в child ngOnInit        ', this.title)
  };

  

}
