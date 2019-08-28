import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibrarydashbaordComponent } from './librarydashbaord/librarydashbaord.component';
import { LibrarydetailsComponent } from './librarydetails/librarydetails.component';

@NgModule({
  declarations: [LibrarydashbaordComponent, LibrarydetailsComponent],
  imports: [
    CommonModule,
    LibraryRoutingModule
  ],
})
export class LibraryModule { }
