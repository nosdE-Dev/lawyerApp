import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseListComponent } from './case-list/case-list.component';

const routes: Routes = [
  {
    path: '',
    component: CaseListComponent,
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
export class CaseManagementRoutingModule { }
