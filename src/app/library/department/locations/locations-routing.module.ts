import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationdashboardComponent } from './locationdashboard/locationdashboard.component';
import { LocationdetailsComponent } from './locationdetails/locationdetails.component';

const routes: Routes = [
  {
    path : '',
    component : LocationdashboardComponent,
    children : [
      {
        path : 'details',
        component : LocationdetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
