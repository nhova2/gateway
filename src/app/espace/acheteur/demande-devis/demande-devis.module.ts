import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandeDevisAcheteurComponent } from './demande-devis-acheteur/demande-devis-acheteur.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { DetailsDemandeDevisComponent } from './details-demande-devis/details-demande-devis.component';
import { DemandDevisFormulaireComponent } from './demand-devis-formulaire/demand-devis-formulaire.component';
import { MatTableModule } from '@angular/material/table';

export const routes = [
  { path: '', component: DemandeDevisAcheteurComponent, pathMatch: 'full' },
  { path: 'detailsDemandeDevis/:id', component: DetailsDemandeDevisComponent, pathMatch: 'full' },
  { path: 'demande-devis-formulaire', component: DemandDevisFormulaireComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    SharedModule,
    MatTableModule
  ],
  declarations: [DemandeDevisAcheteurComponent, DetailsDemandeDevisComponent, DemandDevisFormulaireComponent]
})
export class DemandeDevisModule { }
