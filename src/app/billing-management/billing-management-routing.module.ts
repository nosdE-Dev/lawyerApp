import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingListComponent } from './billing-list/billing-list.component';

const routes: Routes = [
  {
    path: '',
    component: BillingListComponent,
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
export class BillingManagementRoutingModule { }
