import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared-front/shared/shared.module';
import { OffresComponent } from './offres.component';
import { DetailsOffreComponent } from './details-offre/details-offre.component';
import { FuseSidebarModule } from '@fuse/components';
import { FuseDemoModule } from '@fuse/components/demo/demo.module';
import { FuseSharedModule } from '@fuse/shared.module';

export const routes = [
  { path: '', component: OffresComponent, pathMatch: 'full' },
  { path: ':id', component: DetailsOffreComponent }

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
    OffresComponent,
    DetailsOffreComponent
  ]
})
export class OffresModule { }
