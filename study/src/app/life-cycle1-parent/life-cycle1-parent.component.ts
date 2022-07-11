import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle1-parent',
  templateUrl: './life-cycle1-parent.component.html',
  styleUrls: ['./life-cycle1-parent.component.scss']
})
export class LifeCycle1ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
