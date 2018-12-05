import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared-front/shared/shared.module';
import { CartComponent } from './cart.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';

export const routes = [
  { path: '', component: CartComponent, pathMatch: 'full' },
  { path: 'details-cart', component: CartDetailsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    CartComponent,
    CartDetailsComponent
  ]
})
export class CartModule { }
