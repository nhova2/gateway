import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FoStatistiqueListComponent } from './statistique-list/fourn-statistique-list.component';
import { AnimHomeService } from 'app/espace/animateur/anim-home.service';
import { MatCardModule, MatCheckboxModule, MatGridListModule, MatPaginatorModule, MatDialogModule, MatToolbarModule, MatListModule, MatTabsModule, MatTableModule, MatSelectModule, MatMenuModule, MatIconModule, MatFormFieldModule, MatDividerModule, MatButtonModule } from '@angular/material';
import { FuseWidgetModule, FuseSidebarModule } from '@fuse/components';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export const routes = [
  { path: '', 
  component: FoStatistiqueListComponent, 
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
  declarations: [FoStatistiqueListComponent],
  providers   : [AnimHomeService  ]
})
export class StatistiquesFournisseurModule { }
