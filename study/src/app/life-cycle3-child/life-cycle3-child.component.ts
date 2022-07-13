import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle3-child',
  templateUrl: './life-cycle3-child.component.html',
  styleUrls: ['./life-cycle3-child.component.scss']
})
export class LifeCycle3ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
