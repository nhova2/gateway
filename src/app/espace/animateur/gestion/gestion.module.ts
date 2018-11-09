import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { GestionAnimComponent } from './gestion-anim/gestion-anim.component';
import { AnimHomeService } from '../anim-home.service';


export const routes = [
  { 
    path: '', 
    component: GestionAnimComponent, 
    pathMatch: 'full',
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
    RouterModule.forChild(routes)
    //,MatButtonModule,
    //MatDividerModule,
    //MatFormFieldModule,
    //MatIconModule,
    //MatMenuModule,
    //MatSelectModule,
    //MatTableModule,
    //MatTabsModule,
    //FuseSidebarModule,
    //MatListModule,
    //MatToolbarModule,
    //MatDialogModule,
    //MatPaginatorModule,
    //FuseWidgetModule
    //,MatGridListModule
    //,MatCheckboxModule
    //,MatCardModule
  ],
  declarations: [GestionAnimComponent],
  providers   : [AnimHomeService]
})
export class GestionAnimModule { }
