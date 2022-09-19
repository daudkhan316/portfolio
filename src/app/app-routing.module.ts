import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Section1DisplayComponent } from './components/section1-display/section1-display.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { Section2ContentComponent } from './components/section2-content/section2-content.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { BlogComponent } from './pages/blog/blog.component';
import { UiDesignComponent } from './pages/ui-design/ui-design.component';
import { UxDesignComponent } from './pages/ux-design/ux-design.component';
import { ProductDesignComponent } from './pages/product-design/product-design.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { TutorialsComponent } from './pages/tutorials/tutorials.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HomepageComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'uiDesign', component: UiDesignComponent},
  {path: 'uxDesign', component: UxDesignComponent},
  {path: 'productDesign', component: ProductDesignComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'tutorials', component: TutorialsComponent},
  {path: 'news', component: NewsComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const componentRouting =
[
  HeaderComponent,
  FooterComponent,
  Section1DisplayComponent,
  HomepageComponent,
  Section2ContentComponent,
  PagenotfoundComponent,
  BlogComponent,
  UiDesignComponent,
  UxDesignComponent,
  ProductDesignComponent,
  ArticlesComponent,
  TutorialsComponent,
  NewsComponent,
]