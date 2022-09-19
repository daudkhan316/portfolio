import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-section2-content',
  templateUrl: './section2-content.component.html',
  styleUrls: ['./section2-content.component.scss']
})
export class Section2ContentComponent implements OnInit {

  blog1:string="./assets/images/blog1.png";
  blog2:string="./assets/images/blog2.png";
  uiDesign:any[]=[];
  uxDesign:any[]=[];
  productDesign:any[]=[];
  articles:any[]=[];
  tutorials:any[]=[];
  news:any[]=[];

  constructor(private content : ContentService) { }

  ngOnInit(): void {

    this.uiDesign= this.content.getUIDesign();
    this.uxDesign= this.content.getUXDesign();
    this.productDesign= this.content.getProductDesign();
    this.articles= this.content.getArticles();
    this.tutorials= this.content.getTutorials();
    this.news= this.content.getNews();

  }

}
