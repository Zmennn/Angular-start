import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle2-parent',
  templateUrl: './life-cycle2-parent.component.html',
  styleUrls: ['./life-cycle2-parent.component.scss'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class LifeCycle2ParentComponent implements OnInit {


  @Input()
  data = "parentTitle";
  

  @Input()
  arrInPar?:number[];

  constructor(private cdr:ChangeDetectorRef ) { };

  ngOnChanges() {
    // console.log('Це в parent ngOnChanges        ', this.arrInPar)
  };

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    // console.log('Це в parent ngDoCheck        ', this.arrInPar);
    
  };

}
