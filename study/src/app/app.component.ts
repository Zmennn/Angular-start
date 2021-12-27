import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  visibilityData=0
  title = 'study';
  onClickHidden(num:number) {
    this.visibilityData=num
  }

  
}
