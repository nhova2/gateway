import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertesAnimComponent } from './alertes-anim/alertes-anim.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AnimHomeService } from '../anim-home.service';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';

export const routes = [
  { path: '', component: AlertesAnimComponent, pathMatch: 'full' }
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
  declarations: [AlertesAnimComponent],
  providers   : [AnimHomeService,CrudPopupComponent ]
})
export class AlertesAnimateurModule { }
