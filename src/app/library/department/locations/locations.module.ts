import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationdetailsComponent } from './locationdetails/locationdetails.component';
import { LocationdashboardComponent } from './locationdashboard/locationdashboard.component';

@NgModule({
  declarations: [LocationdetailsComponent, LocationdashboardComponent],
  imports: [
    CommonModule,
    LocationsRoutingModule
  ]
})
export class LocationsModule { }
