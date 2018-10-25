import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared-front/shared/shared.module';
import { HomeComponent } from './home.component';
import { FuseSidebarModule } from '@fuse/components';
import { FuseDemoModule } from '@fuse/components/demo/demo.module';
import { FuseSharedModule } from '@fuse/shared.module';

export const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FuseSidebarModule,
    FuseDemoModule,
    FuseSharedModule   
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }