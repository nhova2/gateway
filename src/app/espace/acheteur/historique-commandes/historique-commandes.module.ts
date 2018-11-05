import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriqueCmdAcheteurComponent } from './historique-cmd-acheteur/historique-cmd-acheteur.component';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: HistoriqueCmdAcheteurComponent, pathMatch: 'full' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HistoriqueCmdAcheteurComponent]
})
export class HistoriqueCommandesModule { }
