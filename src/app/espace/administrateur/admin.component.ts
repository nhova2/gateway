import { Component} from '@angular/core';
import { Data, AppService } from '../../front/app.service';
import { Product } from '../../front/app.models';
import { MatDialog } from '@angular/material';
import { adminNavigation } from 'app/espace/administrateur/navigation/admin-navigation';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdministrateurComponent {  
    navigation: any;
    constructor(private _fuseNavigationService: FuseNavigationService){

        this.navigation = adminNavigation;
        
        // Register the navigation to the service
        this._fuseNavigationService.register('admin', this.navigation);

        // Set the main navigation as our current navigation
        this._fuseNavigationService.setCurrentNavigation('admin');
    }
	 toggleSidebar(name): void
    {
        // TODO this._fuseSidebarService.getSidebar(name).toggleOpen();
    }
}

