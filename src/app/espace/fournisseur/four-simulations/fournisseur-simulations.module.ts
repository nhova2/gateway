import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
//import { FoSimulationListComponent } from './simulation-list/fourn-simulation-list.component';
import { AppSimulationComponent } from 'app/commons/simulation/simulation.component';
import { FoSimulationListComponent } from './simulation-list/fourn-simulation-list.component';


export const routes = [
  { path: '', component: AppSimulationComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FuseSharedModule,
    SharedModule,
    MatBadgeModule,
    MatInputModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AppSimulationComponent,FoSimulationListComponent]
})
export class SimulationsFournisseurModule { }
