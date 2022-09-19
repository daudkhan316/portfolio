import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ux-design',
  templateUrl: './ux-design.component.html',
  styleUrls: ['./ux-design.component.scss']
})
export class UxDesignComponent implements OnInit {

  uxDesign:string = "./assets/images/uxDesign.png";

  constructor() { }

  ngOnInit(): void {
  }

}
