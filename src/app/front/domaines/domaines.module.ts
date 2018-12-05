import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared-front/shared/shared.module';
import { DomainesComponent } from './domaines.component';
import { DomaineComponent } from './domaine/domaine.component';
import { DomaineActiviteComponent } from './domaine-activite/domaine-activite.component';
import { FuseSidebarModule } from '@fuse/components';
import { FuseDemoModule } from '@fuse/components/demo/demo.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { DomainesListComponent } from './domaines-list/domaines-list.component';
import { DomaineProduitComponent } from './domaine-produit/domaine-produit.component';

export const routes = [
  { path: '', component: DomainesComponent, pathMatch: 'full' },
  { path: ':name', component: DomaineComponent },
  { path: 'activites/listes', component: DomaineActiviteComponent },
  { path: ':name/produits', component: DomaineProduitComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FuseSidebarModule,
    FuseSharedModule,
    FuseDemoModule
  ],
  declarations: [
    DomainesComponent,
    DomaineComponent,
    DomaineActiviteComponent,
    DomainesListComponent,
    DomaineProduitComponent
  ]
})
export class DomaineModule { }
