import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FoRemboursementListComponent } from './remboursement-list/fourn-remboursement-list.component';


export const routes = [
  { path: '', component: FoRemboursementListComponent, pathMatch: 'full' }
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
  declarations: [FoRemboursementListComponent]
})
export class RemboursementsFournisseurModule { }
