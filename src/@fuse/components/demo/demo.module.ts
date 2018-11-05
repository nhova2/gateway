import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatDividerModule, MatListModule, MatCheckboxModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';

import { FuseDemoContentComponent } from './demo-content/demo-content.component';
import { FuseDemoSidebarComponent } from './demo-sidebar/demo-sidebar.component';
import { ChatBotSidebarComponent } from './chatBot-sidebar/chbot-sidebar.component';
import { AdminSidebarComponent } from './admin-side-menu/admin-sidebar.component';
import { SharedModule } from '../../../app/shared-front/shared/shared.module';


@NgModule({
    declarations: [
        FuseDemoContentComponent,
        FuseDemoSidebarComponent,
        ChatBotSidebarComponent,
        AdminSidebarComponent
    ],
    imports     : [
        RouterModule,

        MatDividerModule,
        MatListModule,
        MatCheckboxModule,
        MatExpansionModule,
        SharedModule
    ],
    exports     : [
        FuseDemoContentComponent,
        FuseDemoSidebarComponent,
        ChatBotSidebarComponent,
        AdminSidebarComponent
    ]
})
export class FuseDemoModule
{
}
