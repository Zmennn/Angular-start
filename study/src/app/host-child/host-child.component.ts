import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-child',
  templateUrl: './host-child.component.html',
  styleUrls: ['./host-child.component.scss']
})
export class HostChildComponent  {



  @HostBinding('class')
  hostClass = 'hidden'
  
  @HostListener('click', ['$event'])
  hostClick(ev: Event) {
    ev.stopPropagation()
    }

  @HostListener('window:click')
  hideMenu() {
  this.hostClass='hidden'    
}
    

  showMenu(ev: Event) {
    ev.stopPropagation()
    this.hostClass = '';
  }

  
}
