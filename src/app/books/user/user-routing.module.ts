import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdashbaordComponent } from './userdashbaord/userdashbaord.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserordersComponent } from './userorders/userorders.component';

const routes: Routes = [
  {
    path : '',
    component : UserdashbaordComponent,
    children : [
      {
        path : 'details/:userdetails',
        component : UserdetailsComponent
      },
      {
        path : 'orders',
        component : UserordersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
