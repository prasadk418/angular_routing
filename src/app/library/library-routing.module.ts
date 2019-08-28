import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentdashboardComponent } from './department/departmentdashboard/departmentdashboard.component';
import { DepartmentdetailsComponent } from './department/departmentdetails/departmentdetails.component';
import { LibrarydashbaordComponent } from './librarydashbaord/librarydashbaord.component';
import { LibrarydetailsComponent } from './librarydetails/librarydetails.component';

const routes: Routes = [
  
  {
    path : '',
    component : LibrarydashbaordComponent,
    children : [
      {
        path : 'details',
        component : LibrarydetailsComponent
      }
    ]
  },
  {
    path : 'department',
    loadChildren : './department/department.module#DepartmentModule'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
