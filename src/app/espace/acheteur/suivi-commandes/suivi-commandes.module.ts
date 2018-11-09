import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiviCommandeAcheteurComponent } from './suivi-commande-acheteur/suivi-commande-acheteur.component';
import { RouterModule } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { DetailsCommandeComponent } from './details-commande/details-commande.component';

export const routes = [
  { path: '', component: SuiviCommandeAcheteurComponent, pathMatch: 'full' },
  { path: 'detailsCommande/:id', component: DetailsCommandeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatStepperModule,
    FuseSharedModule,
    SharedModule
  ],
  declarations: [SuiviCommandeAcheteurComponent, DetailsCommandeComponent]
})
export class SuiviCommandesModule { }
