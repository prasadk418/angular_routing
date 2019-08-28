import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentdashboardComponent } from './departmentdashboard/departmentdashboard.component';
import { DepartmentdetailsComponent } from './departmentdetails/departmentdetails.component';

@NgModule({
  declarations: [DepartmentdashboardComponent, DepartmentdetailsComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
