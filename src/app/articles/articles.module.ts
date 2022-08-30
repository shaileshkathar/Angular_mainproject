import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesDetailsComponent } from './articles-details/articles-details.component';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { FeaturedArticlesComponent } from './featured-articles/featured-articles.component';
import { CategoriesComponent } from './categories/categories.component';
import { ArticlesRoutingModule } from './articles-routing.module';

@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticlesDetailsComponent,
    LatestArticlesComponent,
    FeaturedArticlesComponent,
    CategoriesComponent,
  ],
  imports: [CommonModule, ArticlesRoutingModule],
  exports: [LatestArticlesComponent],
})
export class ArticlesModule {}
