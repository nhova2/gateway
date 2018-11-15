import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';

import { FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';

import { ChatPanelModule } from 'app/theme/layout/components/chat-panel/chat-panel.module';
import { ContentModule } from 'app/theme/layout/components/content/content.module';
import { FooterModule } from 'app/theme/layout/components/footer/footer.module';
import { NavbarModule } from 'app/theme/layout/components/navbar/navbar.module';
import { QuickPanelModule } from 'app/theme/layout/components/quick-panel/quick-panel.module';
import { ToolbarModule } from 'app/theme/layout/components/toolbar/toolbar.module';

import { HorizontalLayout1Component } from 'app/theme/layout/horizontal/layout-1/layout-1.component';

@NgModule({
    declarations: [
        HorizontalLayout1Component
    ],
    imports     : [
        MatSidenavModule,

        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        ChatPanelModule,
        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule
    ],
    exports     : [
        HorizontalLayout1Component
    ]
})
export class HorizontalLayout1Module
{
}
