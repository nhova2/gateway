import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProduitsComponent } from './produit.component';
import { ProduitComponent } from './produit/produit.component';
import { DetailsProduitComponent } from './details-produit/details-produit.component';
import { ProduitZoomComponent } from './details-produit/produit-zoom/produit-zoom.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../../front/theme/pipes/pipes.module';
import { SharedModule } from '../../shared-front/shared/shared.module';
import { FuseSidebarModule } from '@fuse/components';
import { FuseDemoModule } from '@fuse/components/demo/demo.module';
import { FuseSharedModule } from '@fuse/shared.module';

export const routes = [
  { path: '', component: ProduitsComponent, pathMatch: 'full' },
  { path: ':name', component: ProduitComponent},
  { path: 'detailsProduit/:id', component: DetailsProduitComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    NgxPaginationModule,
    PipesModule,
    SharedModule,
    FuseSidebarModule,
    FuseDemoModule,
    FuseSharedModule
    
  ],
  declarations: [
    ProduitsComponent,
    ProduitComponent,
    DetailsProduitComponent,
    ProduitZoomComponent
  ],
  entryComponents: [
    ProduitZoomComponent
  ]
})
export class ProduitModule { }
