import { NgModule } from '@angular/core';

import { UIFormsModule } from 'app/theme/ui/forms/forms.module';
import { UIIconsModule } from 'app/theme/ui/icons/icons.module';
import { UITypographyModule } from 'app/theme/ui/typography/typography.module';
import { UIHelperClassesModule } from 'app/theme/ui/helper-classes/helper-classes.module';
import { UIPageLayoutsModule } from 'app/theme/ui/page-layouts/page-layouts.module';
import { UIColorsModule } from 'app/theme/ui/colors/colors.module';

@NgModule({
    imports: [
        UIFormsModule,
        UIIconsModule,
        UITypographyModule,
        UIHelperClassesModule,
        UIPageLayoutsModule,
        UIColorsModule
    ]
})
export class UIModule
{
}
