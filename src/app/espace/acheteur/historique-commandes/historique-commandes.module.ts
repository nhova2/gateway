import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriqueCmdAcheteurComponent } from './historique-cmd-acheteur/historique-cmd-acheteur.component';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { DetailsHistoDemandeComponent } from './details-histo-demande/details-histo-demande.component';

export const routes = [
  { path: '', component: HistoriqueCmdAcheteurComponent, pathMatch: 'full' },
  { path: 'detailsHistoDemande/:id', component: DetailsHistoDemandeComponent, pathMatch: 'full' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    SharedModule
  ],
  declarations: [HistoriqueCmdAcheteurComponent, DetailsHistoDemandeComponent]
})
export class HistoriqueCommandesModule { }
