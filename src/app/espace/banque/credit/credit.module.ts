import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditComponent } from './credit/credit.component';
import { SuiviCreditComponent } from './suivi-credit/suivi-credit.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { RouterModule } from '@angular/router';
import { LigneCreditListComponent } from './ligne-credit-list/ligne-credit-list.component';
import { LignePretListComponent } from './ligne-pret-list/ligne-pret-list.component';

export const routes = [
  { path: '', component: CreditComponent, pathMatch: 'full' },
  { path: 'suivi-credit', component: SuiviCreditComponent, pathMatch: 'full' },
  { path: 'ligne-credit-list', component: LigneCreditListComponent, pathMatch: 'full' },
  { path: 'ligne-pret-list', component: LignePretListComponent, pathMatch: 'full' },
];


@NgModule({
  imports: [
    CommonModule,
    FuseSharedModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreditComponent, SuiviCreditComponent, LigneCreditListComponent, LignePretListComponent]
})
export class CreditModule { }
