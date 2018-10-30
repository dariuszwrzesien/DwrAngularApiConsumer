import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { BooksGridComponent } from './books/books-grid.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/books' },
  { path: 'books', component: BooksComponent},
  { path: '**', redirectTo: '/books' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [ BooksComponent, BooksGridComponent ];
}
