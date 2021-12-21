import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent  {

  constructor() {
    
   }
  title = "Этот текст задан в классе компонента";
  number = 10;
  arr = [1, 5, 8, 9, 0];

  exampleFunction() {
    const result=this.arr[2]
    return `Это результат работы функции,третий элемент массива ${result}`
  }
  
}
