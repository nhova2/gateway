import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule, MatTabsModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseHighlightModule } from '@fuse/components';

import { TypographyComponent } from 'app/theme/ui/typography/typography.component';
import { TypographyHeadingsComponent } from 'app/theme/ui/typography/tabs/headings/headings.component';
import { TypographyInlineTextElementsComponent } from 'app/theme/ui/typography/tabs/inline-text-elements/inline-text-elements.component';
import { TypographyBlockquotesListsComponent } from 'app/theme/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component';
import { TypographyMessageBoxesComponent } from 'app/theme/ui/typography/tabs/message-boxes/message-boxes.component';
import { TypographyHelpersComponent } from 'app/theme/ui/typography/tabs/helpers/helpers.component';

const routes: Routes = [
    {
        path     : 'typography',
        component: TypographyComponent
    }
];

@NgModule({
    declarations: [
        TypographyComponent,
        TypographyHeadingsComponent,
        TypographyInlineTextElementsComponent,
        TypographyBlockquotesListsComponent,
        TypographyMessageBoxesComponent,
        TypographyHelpersComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,
        MatTabsModule,

        FuseSharedModule,
        FuseHighlightModule
    ]
})
export class UITypographyModule
{
}
