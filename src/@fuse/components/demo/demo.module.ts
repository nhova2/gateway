import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatDividerModule, MatListModule, MatCheckboxModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';

import { FuseDemoContentComponent } from './demo-content/demo-content.component';
import { FuseDemoSidebarComponent } from './demo-sidebar/demo-sidebar.component';
import { ChatBotSidebarComponent } from './chatBot-sidebar/chbot-sidebar.component';

@NgModule({
    declarations: [
        FuseDemoContentComponent,
        FuseDemoSidebarComponent,
        ChatBotSidebarComponent
    ],
    imports     : [
        RouterModule,

        MatDividerModule,
        MatListModule,
        MatCheckboxModule,
        MatExpansionModule
    ],
    exports     : [
        FuseDemoContentComponent,
        FuseDemoSidebarComponent,
        ChatBotSidebarComponent
    ]
})
export class FuseDemoModule
{
}
