import { Component, HostBinding, OnInit,OnChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle1-parent',
  templateUrl: './life-cycle1-parent.component.html',
  styleUrls: ['./life-cycle1-parent.component.scss']
})
export class LifeCycle1ParentComponent implements OnInit,OnChanges {

  data="parentTitle"


  constructor() {
    // console.log('Це в parent constructor      ', this.data)
  };
  
  ngOnChanges() {
    // console.log('Це в parent ngOnChanges        ', this.data)
  };


  ngOnInit(): void {
    // console.log('Це в parent ngOnInit        ', this.data)
  };

  

}
