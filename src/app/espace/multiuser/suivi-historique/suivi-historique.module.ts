import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiviMuserComponent } from './suivi-muser/suivi-muser.component';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { SearchSuiviComponent } from './search-suivi/search-suivi.component';
import { CommandeListComponent } from './commande-list/commande-list.component';
import { PretListComponent } from './pret-list/pret-list.component';
import { DevisListComponent } from './devis-list/devis-list.component';
import { LivraisonListComponent } from './livraison-list/livraison-list.component';
import { CreditListComponent } from './credit-list/credit-list.component';
import { EncheresListComponent } from './encheres-list/encheres-list.component';
import { GDemandeListComponent } from './g-demande-list/g-demande-list.component';
import { DepotListComponent } from './depot-list/depot-list.component';
import { NotationsListComponent } from './notations-list/notations-list.component';

export const routes = [
      { path: '', component: SuiviMuserComponent, pathMatch: 'full' },
      { path: 'search', component: SearchSuiviComponent, pathMatch: 'full' },
      { path: 'commande-list', component: CommandeListComponent, pathMatch: 'full' },
      { path: 'pret-list', component: PretListComponent, pathMatch: 'full' },
      { path: 'devis-list', component: DevisListComponent, pathMatch: 'full' },
      { path: 'livraison-list', component: LivraisonListComponent, pathMatch: 'full' },
      { path: 'credit-list', component: CreditListComponent, pathMatch: 'full' },
      { path: 'enchere-list', component: EncheresListComponent, pathMatch: 'full' },
      { path: 'gdemande-list', component: GDemandeListComponent, pathMatch: 'full' },
      { path: 'depot-list', component: DepotListComponent, pathMatch: 'full' },
      { path: 'notation-list', component: NotationsListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FuseSharedModule,
    SharedModule,
    MatBadgeModule,
    MatInputModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SuiviMuserComponent, 
    SearchSuiviComponent, 
    CommandeListComponent, 
    PretListComponent, 
    DevisListComponent, 
    LivraisonListComponent, 
    CreditListComponent, 
    EncheresListComponent, 
    GDemandeListComponent, 
    DepotListComponent, 
    NotationsListComponent]
})
export class SuiviHistoriqueModule { }
