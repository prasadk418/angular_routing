import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { BookauhtorComponent } from './bookauhtor/bookauhtor.component';

@NgModule({
  declarations: [DashboardComponent, BookdetailsComponent, BookauhtorComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  exports : [DashboardComponent]
})
export class BooksModule { }
