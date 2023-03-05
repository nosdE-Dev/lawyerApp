import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseManagementRoutingModule } from './case-management-routing.module';
import { CaseListComponent } from './case-list/case-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CaseListComponent
  ],
  imports: [
    CommonModule,
    CaseManagementRoutingModule,
    RouterModule
  ]
})
export class CaseManagementModule { }
