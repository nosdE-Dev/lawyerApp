import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportingListComponent } from './reporting-list/reporting-list.component';

const routes: Routes = [
  {
    path: '',
    component: ReportingListComponent,
    children: [
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportingManagementRoutingModule { }
