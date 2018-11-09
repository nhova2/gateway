import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiviProduitComponent } from './suivi-produit/suivi-produit.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: SuiviProduitComponent, pathMatch: 'full' },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    SharedModule,
  
  ],
  declarations: [SuiviProduitComponent]
})
export class ProduitModule { }
