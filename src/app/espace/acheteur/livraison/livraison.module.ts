import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivraisonAcheteurComponent } from './livraison-acheteur/livraison-acheteur.component';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: LivraisonAcheteurComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LivraisonAcheteurComponent]
})
export class LivraisonModule { }
