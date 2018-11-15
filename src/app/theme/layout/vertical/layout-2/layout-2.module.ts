import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSidebarModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';

import { ChatPanelModule } from 'app/theme/layout/components/chat-panel/chat-panel.module';
import { ContentModule } from 'app/theme/layout/components/content/content.module';
import { FooterModule } from 'app/theme/layout/components/footer/footer.module';
import { NavbarModule } from 'app/theme/layout/components/navbar/navbar.module';
import { QuickPanelModule } from 'app/theme/layout/components/quick-panel/quick-panel.module';
import { ToolbarModule } from 'app/theme/layout/components/toolbar/toolbar.module';

import { VerticalLayout2Component } from 'app/theme/layout/vertical/layout-2/layout-2.component';

@NgModule({
    declarations: [
        VerticalLayout2Component
    ],
    imports     : [
        RouterModule,

        FuseSharedModule,
        FuseSidebarModule,

        ChatPanelModule,
        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule
    ],
    exports     : [
        VerticalLayout2Component
    ]
})
export class VerticalLayout2Module
{
}
