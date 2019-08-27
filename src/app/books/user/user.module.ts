import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserdashbaordComponent } from './userdashbaord/userdashbaord.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserordersComponent } from './userorders/userorders.component';

@NgModule({
  declarations: [UserdashbaordComponent, UserdetailsComponent, UserordersComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
