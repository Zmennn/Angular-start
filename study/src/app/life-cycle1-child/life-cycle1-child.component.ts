import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle1-child',
  templateUrl: './life-cycle1-child.component.html',
  styleUrls: ['./life-cycle1-child.component.scss']
})
export class LifeCycle1ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
