import { Component, OnInit } from '@angular/core';


export interface Card{
  title: string
  text:string
}


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  constructor() { }

  visibly = false;
  showGallery() {
    this.visibly = !this.visibly;
  }

  cards: Card[] = [
    {
      title: "first",
      text: "knjkjjdk; 'dfjksl ekojfd odkfdlfkl "
    },
    {
      title: "second",
      text: "knjkjjdk;  ekojfd odkfdlfkl "
    },
    {
      title: "card 3",
      text: "knjkjjdk;  ekojfd odkfdlfkl sjdasdh sgdhasdyuasi hhdsjd  "
    }
  ];
  
  ngOnInit(): void {
  }

}
