import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiviDepotComponent } from './suivi-depot/suivi-depot.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { RouterModule } from '@angular/router';
//import { DepotComponent } from './depot/depot.component';

export const routes = [
  //{ path: '', component: DepotComponent, pathMatch: 'full' },
  { path: 'suivi-depot', component: SuiviDepotComponent, pathMatch: 'full' },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    SharedModule,
    
  ],
  declarations: [SuiviDepotComponent
  //  , DepotComponent
  ]
})
export class DepotModule { }
