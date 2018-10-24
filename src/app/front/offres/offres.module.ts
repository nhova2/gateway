import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared-front/shared/shared.module';
import { OffresComponent } from './offres.component';
import { DetailsOffreComponent } from './details-offre/details-offre.component';

export const routes = [
  { path: '', component: OffresComponent, pathMatch: 'full' },
  { path: ':id', component: DetailsOffreComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    OffresComponent,
    DetailsOffreComponent
  ]
})
export class OffresModule { }
