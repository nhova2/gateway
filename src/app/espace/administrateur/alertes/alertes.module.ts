import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertesAdminComponent } from './alertes-admin/alertes-admin.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';


export const routes = [
  { path: '', component: AlertesAdminComponent, pathMatch: 'full' }
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
  declarations: [AlertesAdminComponent]
})
export class AlertesModule { }
