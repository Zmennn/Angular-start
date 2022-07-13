import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle3-parent',
  templateUrl: './life-cycle3-parent.component.html',
  styleUrls: ['./life-cycle3-parent.component.scss']
})
export class LifeCycle3ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
