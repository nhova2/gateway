import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandeFinancementAcheteurComponent } from './demande-financement-acheteur/demande-financement-acheteur.component';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: DemandeFinancementAcheteurComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  declarations: [DemandeFinancementAcheteurComponent]
})
export class DemandeFinancementModule { }
