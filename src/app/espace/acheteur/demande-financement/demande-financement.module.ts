import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandeFinancementAcheteurComponent } from './demande-financement-acheteur/demande-financement-acheteur.component';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { DetailsDemandeFinancementComponent } from './details-demande-financement/details-demande-financement.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

export const routes = [
  { path: '', component: DemandeFinancementAcheteurComponent, pathMatch: 'full' },
  { path: 'detailsDemande-fiancement/:id', component: DetailsDemandeFinancementComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule

  ],
  declarations: [DemandeFinancementAcheteurComponent, DetailsDemandeFinancementComponent]
})
export class DemandeFinancementModule { }
