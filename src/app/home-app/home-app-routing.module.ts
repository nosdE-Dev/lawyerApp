import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'clients',
        loadChildren: () => import('../client-management/client-management.module').then( m => m.ClientManagementModule ),
        canLoad: [ AuthGuard ],
        canActivate: [ AuthGuard ]
      },
      {
        path: 'cases',
        loadChildren: () => import('../case-management/case-management.module').then( m => m.CaseManagementModule ),
        canLoad: [ AuthGuard ],
        canActivate: [ AuthGuard ]
      },
      {
        path: 'documents',
        loadChildren: () => import('../document-management/document-management.module').then( m => m.DocumentManagementModule ),
        canLoad: [ AuthGuard ],
        canActivate: [ AuthGuard ]
      },
      {
        path: 'billing',
        loadChildren: () => import('../billing-management/billing-management.module').then( m => m.BillingManagementModule ),
        canLoad: [ AuthGuard ],
        canActivate: [ AuthGuard ]
      },
      {
        path: 'reporting',
        loadChildren: () => import('../reporting-management/reporting-management.module').then( m => m.ReportingManagementModule ),
        canLoad: [ AuthGuard ],
        canActivate: [ AuthGuard ]
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeAppRoutingModule { }
