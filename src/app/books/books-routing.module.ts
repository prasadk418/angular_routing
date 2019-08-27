import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookauhtorComponent } from './bookauhtor/bookauhtor.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';

const routes: Routes = [
  {
    path : '',
    component : DashboardComponent,
    children : [
      {
        path : 'author',
        component : BookauhtorComponent
      },
      {
        path : 'details',
        component : BookdetailsComponent
      }
    ]
  },
  {
    path : 'user',
    loadChildren : './user/user.module#UserModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
