import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiviDepotComponent } from './suivi-depot/suivi-depot.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { RouterModule } from '@angular/router';
import { DepotComponent } from './depot/depot.component';
import { DetailsSuiviDepotComponent } from './suivi-depot/details-suivi-depot/details-suivi-depot.component';

export const routes = [
  { path: '', component: DepotComponent, pathMatch: 'full' },
  { path: 'suivi-depot', component: SuiviDepotComponent, pathMatch: 'full' },
  { path: 'details-suivi-depot/:id', component: DetailsSuiviDepotComponent, pathMatch: 'full' },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    SharedModule,
    
  ],
  declarations: [SuiviDepotComponent, DepotComponent, DetailsSuiviDepotComponent
  ]
})
export class DepotModule { }
