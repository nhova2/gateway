import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { StatistiqueAnimComponent } from './statistique-anim/statistique-anim.component';
import { AnimHomeService } from '../anim-home.service';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule, MatTableModule, MatTabsModule, MatListModule, MatToolbarModule, MatDialogModule, MatPaginatorModule, MatGridListModule, MatCheckboxModule, MatCardModule } from '@angular/material';
import { FuseSidebarModule, FuseWidgetModule } from '@fuse/components';


export const routes = [
  { 
    path: '', component: StatistiqueAnimComponent, 
    pathMatch: 'full' ,
    resolve  : 
    {
      data: AnimHomeService
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
    RouterModule.forChild(routes),
    ChartsModule,
    NgxChartsModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    FuseSidebarModule,
    MatListModule,
    MatToolbarModule,
    MatDialogModule,
    MatPaginatorModule,
    FuseWidgetModule
    ,MatGridListModule
    ,MatCheckboxModule
    ,MatCardModule
  ],
  declarations: [StatistiqueAnimComponent],
  providers   : [AnimHomeService  ]
})
export class StatistiqueAnimModule { }
