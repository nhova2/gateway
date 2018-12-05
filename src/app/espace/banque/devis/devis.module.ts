import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiviDevisComponent } from './suivi-devis/suivi-devis.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { RouterModule } from '@angular/router';
import { DetailsSuiviDevisComponent } from './suivi-devis/details-suivi-devis/details-suivi-devis.component';

export const routes = [
  { path: '', component: SuiviDevisComponent, pathMatch: 'full' },
  { path: 'details-suivi-devis/:id', component: DetailsSuiviDevisComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    SharedModule,
    
  ],
  declarations: [SuiviDevisComponent, DetailsSuiviDevisComponent]
})
export class DevisModule { }
