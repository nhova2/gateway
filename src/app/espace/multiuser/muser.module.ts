import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared-front/shared/shared.module';
import { MultiUserComponent } from './muser.component';
import { MuserHomeService } from './muser-home.service';
import { AppFilterSidebarComponent } from 'app/commons/filter-sidebar/filter-sidebar.component';
import { FuseSidebarModule } from '@fuse/components';
import { NgMarqueeModule } from 'ng-marquee';
import { Ng5SliderModule } from 'ng5-slider';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';


export const muserRoutes = [
  { 
    path: 'muser-comp-root', 
    component: MultiUserComponent, 
    pathMatch: 'full',
    resolve  : 
    {
      data: MuserHomeService
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FuseSharedModule,
    SharedModule,
    MatBadgeModule,
    MatInputModule,
   RouterModule.forChild(muserRoutes),
    FuseSharedModule,
    FuseSidebarModule,
    NgMarqueeModule,
        Ng5SliderModule
    
  ],
  declarations: [MultiUserComponent,AppFilterSidebarComponent],
  exports: [MultiUserComponent,AppFilterSidebarComponent],
  providers   : [MuserHomeService,CrudPopupComponent]
})
export class MultiUserModule { }
