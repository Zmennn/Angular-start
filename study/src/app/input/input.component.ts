import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
  
export class InputComponent implements OnInit {

  constructor() { }

  text = "";
  text2 = "";

  inputHandler(ev:any) {
  this.text=ev.target.value
  };
  buttonHandler() {   
    this.text = ""
  }
  
  inputHandler2(data:string) {
  this.text2=data
  };
  buttonHandler2() {
    this.text2=""
  }

  ngOnInit(): void {
  }
}
