import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-design',
  templateUrl: './ui-design.component.html',
  styleUrls: ['./ui-design.component.scss']
})
export class UiDesignComponent implements OnInit {

  uiDesign:string = "./assets/images/uiDesign.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
