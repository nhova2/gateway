import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../app/shared-front/shared/shared.module';
import { PopupsComponent } from './popups.component';
import {FormControl, Validators} from '@angular/forms';
import {FormsModule} from '@angular/forms';

export const routes = [
  { path: '', component: PopupsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    PopupsComponent
  ]
})
export class PopupsModule { 
  }
