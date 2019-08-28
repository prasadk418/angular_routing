import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentdashboardComponent } from './departmentdashboard/departmentdashboard.component';
import { DepartmentdetailsComponent } from './departmentdetails/departmentdetails.component';

const routes: Routes = [
  {
    path : '',
    component : DepartmentdashboardComponent,
    children : [
      {
        path : 'details',
        component : DepartmentdetailsComponent
      }
    ]
  },
  {
    path: 'location',
    loadChildren : './locations/locations.module#LocationsModule'
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
