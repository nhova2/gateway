import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainMuserComponent } from './main-muser/main-muser.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule, MatTabsModule, MatTableModule, MatListModule, MatToolbarModule, MatDialogModule, MatPaginatorModule, MatGridListModule, MatCardModule, MatCheckboxModule } from '@angular/material';
import { FuseSidebarModule, FuseWidgetModule } from '@fuse/components';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MuserHomeService } from '../muser-home.service';

export const routes = [
  { 
    path: '', 
    component: MainMuserComponent, 
    pathMatch: 'full' ,
    resolve  : 
    {
      data: MuserHomeService
    }
  }
];
@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes),
      FuseSharedModule,
      SharedModule,
      MatBadgeModule,
      MatInputModule,
      MatButtonModule,
      MatDividerModule,
      MatFormFieldModule,
      MatIconModule,
      MatMenuModule,
      MatSelectModule,
      MatTableModule,
      MatTabsModule,
      MatInputModule,
      FuseSharedModule,
      FuseSidebarModule,
      MatListModule,
      MatToolbarModule,
      MatDialogModule,
      MatPaginatorModule,
      ChartsModule,
      NgxChartsModule,
      FuseSharedModule,
      FuseWidgetModule
      ,MatGridListModule
      ,MatCheckboxModule
      ,MatCardModule
  ],
  providers   : [MuserHomeService
  ],
  declarations: [MainMuserComponent]
})
export class MainMuserModule { }
