import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stayle-toggle',
  templateUrl: './stayle-toggle.component.html',
  styleUrls: ['./stayle-toggle.component.scss']
})
export class StayleToggleComponent implements OnInit {

  constructor() { }
  colorStale = '';
  

  handler(tit: any, color: string) {
       
    this.colorStale = color;   
  }
  
  ngOnInit(): void {
  }

}
