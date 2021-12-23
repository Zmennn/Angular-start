import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stayle-toggle',
  templateUrl: './stayle-toggle.component.html',
  styleUrls: ['./stayle-toggle.component.scss']
})
export class StayleToggleComponent implements OnInit {

  constructor() { }
  colorStale = '';
  result = '';

  handler(tit: any, color: string) {
    
    this.result=tit.classList.value;
    this.colorStale = color;
    console.log(this.result);
}
  ngOnInit(): void {
  }

}
