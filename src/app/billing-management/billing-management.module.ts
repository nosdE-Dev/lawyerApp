import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingManagementRoutingModule } from './billing-management-routing.module';
import { BillingListComponent } from './billing-list/billing-list.component';


@NgModule({
  declarations: [
    BillingListComponent
  ],
  imports: [
    CommonModule,
    BillingManagementRoutingModule
  ]
})
export class BillingManagementModule { }
