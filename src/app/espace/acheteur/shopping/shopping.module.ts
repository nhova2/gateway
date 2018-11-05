import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingAcheteurComponent } from './shopping-acheteur/shopping-acheteur.component';
import { Router, RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { ProduitZoomComponent } from './produit-zoom/produit-zoom.component';

export const routes = [
  { path: '', component: ShoppingAcheteurComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    SharedModule,
    MatBadgeModule,
    MatInputModule
  ],
  declarations: [ShoppingAcheteurComponent, ProduitZoomComponent],
  entryComponents: [
    ProduitZoomComponent
  ]
})
export class ShoppingModule { }
