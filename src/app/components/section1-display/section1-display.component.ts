import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section1-display',
  templateUrl: './section1-display.component.html',
  styleUrls: ['./section1-display.component.scss']
})
export class Section1DisplayComponent implements OnInit {

  rectangle: string = "./assets/images/Rectangle.png";
  saly: string = "./assets/images/Saly-16.png";
  linkedin: string = "./assets/images/linedin.png";
  twitter: string = "./assets/images/twitter.png";
  medium: string = "./assets/images/medium.png";

  constructor() { }

  ngOnInit(): void {
  }

}
