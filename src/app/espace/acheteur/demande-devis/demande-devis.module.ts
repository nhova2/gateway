import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandeDevisAcheteurComponent } from './demande-devis-acheteur/demande-devis-acheteur.component';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: DemandeDevisAcheteurComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DemandeDevisAcheteurComponent]
})
export class DemandeDevisModule { }
