import { Component, OnInit,OnChanges,DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle2-child',
  templateUrl: './life-cycle2-child.component.html',
  styleUrls: ['./life-cycle2-child.component.scss']
})
export class LifeCycle2ChildComponent implements OnInit,OnChanges,DoCheck {

@Input()
arrChild?:number [];
  
@Input()
title='startTitle'

  constructor() { }

 ngOnChanges() {
    console.log('Це в child ngOnChanges        ', this.arrChild)
  };

  ngOnInit(): void {
  };

  ngDoCheck(): void {
    console.log('Це в child ngDoCheck        ', this.arrChild)
  };

}
