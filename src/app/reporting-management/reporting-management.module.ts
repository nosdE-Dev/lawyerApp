import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportingManagementRoutingModule } from './reporting-management-routing.module';
import { ReportingListComponent } from './reporting-list/reporting-list.component';


@NgModule({
  declarations: [
    ReportingListComponent
  ],
  imports: [
    CommonModule,
    ReportingManagementRoutingModule
  ]
})
export class ReportingManagementModule { }
