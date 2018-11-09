import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiviDevisComponent } from './suivi-devis/suivi-devis.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: SuiviDevisComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    SharedModule,
    
  ],
  declarations: [SuiviDevisComponent]
})
export class DevisModule { }
