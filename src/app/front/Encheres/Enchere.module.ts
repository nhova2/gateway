import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared-front/shared/shared.module';
import { EnchereComponent } from './Enchere.component';
import { DetailEnchereComponent } from './detail-enchere/detail-enchere.component';

export const routes = [
  { path: '', component: EnchereComponent, pathMatch: 'full' },
  { path: ':name', component: DetailEnchereComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    EnchereComponent,
    DetailEnchereComponent
  ]
})
export class EnchereModule { }
