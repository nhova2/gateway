import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiviDepotComponent } from './suivi-depot/suivi-depot.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: SuiviDepotComponent, pathMatch: 'full' },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    SharedModule,
    
  ],
  declarations: [SuiviDepotComponent]
})
export class DepotModule { }
