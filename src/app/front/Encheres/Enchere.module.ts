import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared-front/shared/shared.module';
import { EnchereComponent } from './Enchere.component';
import { DetailEnchereComponent } from './detail-enchere/detail-enchere.component';
import { FuseSidebarModule } from '@fuse/components';
import { FuseDemoModule } from '@fuse/components/demo/demo.module';
import { FuseSharedModule } from '@fuse/shared.module';

export const routes = [
  { path: '', component: EnchereComponent, pathMatch: 'full' },
  { path: ':name', component: DetailEnchereComponent, pathMatch: 'full' }

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
    EnchereComponent,
    DetailEnchereComponent
  ]
})
export class EnchereModule { }
