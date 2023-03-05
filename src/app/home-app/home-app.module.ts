import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeAppRoutingModule } from './home-app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsModule } from '../products/products.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    HomeAppRoutingModule,
    SharedModule,
    ProductsModule

  ]
})
export class HomeAppModule { }
