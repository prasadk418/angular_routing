import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  
  {
    path : '',
    redirectTo : 'books',
    pathMatch : 'full'
    //component : TestComponent
  },
  {
    path : 'test',
    component : TestComponent
  },
  {
    path : 'books',
    loadChildren : './books/books.module#BooksModule'
  },
  {
    path : 'lib',
    loadChildren : './library/library.module#LibraryModule'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
