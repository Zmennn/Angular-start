import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data = "стартовое апп";
  show = true;

arr:number[]=[1,2,3]

  visibilityData=0
  title = 'study';

  onClickHidden(num:number) {
    this.visibilityData=num
  }

  imutationArr() {this.arr=[...this.arr, 7],console.log(this.arr) }
  
  mutationArr(){this.arr.push(6),console.log(this.arr)}

  
}
