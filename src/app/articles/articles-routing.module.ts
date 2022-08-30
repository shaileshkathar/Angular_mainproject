import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesDetailsComponent } from './articles-details/articles-details.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesListComponent },
  { path: 'articles/:id', component: ArticlesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
