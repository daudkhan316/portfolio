import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles:any;

  constructor(private _articleServices : ArticlesService) { }

  ngOnInit(): void {

    // this.articles = this._articleServices.getArticles();

  }

}
