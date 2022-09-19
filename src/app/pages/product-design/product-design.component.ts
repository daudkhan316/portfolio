import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-design',
  templateUrl: './product-design.component.html',
  styleUrls: ['./product-design.component.scss']
})
export class ProductDesignComponent implements OnInit {

  productDesign:string = "./assets/images/productDesign.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
