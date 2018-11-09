import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluxCommissionComponent } from './flux-commission/flux-commission.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: FluxCommissionComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FuseSharedModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FluxCommissionComponent]
})
export class FluxCommissionModule { }
