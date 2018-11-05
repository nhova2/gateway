import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiviCommandeAcheteurComponent } from './suivi-commande-acheteur/suivi-commande-acheteur.component';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: SuiviCommandeAcheteurComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuiviCommandeAcheteurComponent]
})
export class SuiviCommandesModule { }
