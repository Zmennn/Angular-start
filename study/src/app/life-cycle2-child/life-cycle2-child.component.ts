import { Component, OnInit,OnChanges,DoCheck, Input,ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-life-cycle2-child',
  templateUrl: './life-cycle2-child.component.html',
  styleUrls: ['./life-cycle2-child.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LifeCycle2ChildComponent implements OnInit,OnChanges,DoCheck {

@Input()
arrChild?:number [];
  
@Input()
title='startTitle'

  constructor(private cdr:ChangeDetectorRef) { }

 ngOnChanges() {
   console.log('Це в child ngOnChanges        ', this.arrChild)
   this.cdr.markForCheck()
  };

  ngOnInit(): void {
  };

  ngDoCheck(): void {
    console.log('Це в child ngDoCheck        ', this.arrChild)
  };

}
