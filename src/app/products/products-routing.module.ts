import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './pages/all-products/all-products.component';

const routes: Routes = [
  {
    path: '',
    component: AllProductsComponent,
    children: [
      {
        path: '**',
        redirectTo: ''
      }
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
