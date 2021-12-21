import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interactive',
  templateUrl: './interactive.component.html',
  styleUrls: ['./interactive.component.scss']
})
export class InteractiveComponent implements OnInit {

  constructor() { }
  container='container'
  toggleClass() {
    if (this.container === 'container') {
    this.container='container newColor'
  } else{this.container='container'}
}
  ngOnInit(): void {
  }

}
