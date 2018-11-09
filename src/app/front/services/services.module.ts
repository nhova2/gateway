import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceComponent } from './services.component';
import { SharedModule } from '../../shared-front/shared/shared.module';
import { FuseSidebarModule } from '@fuse/components';
import { FuseDemoModule } from '@fuse/components/demo/demo.module';
import { FuseSharedModule } from '@fuse/shared.module';

export const routes = [
  { path: '', component: ServiceComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    SharedModule,
    FuseSidebarModule,
    FuseDemoModule,
    FuseSharedModule
  ],
  declarations: [
    ServiceComponent
  ]
})
export class ServiceModule { }
