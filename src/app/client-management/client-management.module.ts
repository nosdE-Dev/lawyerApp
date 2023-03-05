import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientManagementRoutingModule } from './client-management-routing.module';
import { RouterModule } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';


@NgModule({
  declarations: [
    ClientListComponent
  ],
  imports: [
    CommonModule,
    ClientManagementRoutingModule,
    RouterModule,
  ]
})
export class ClientManagementModule { }
