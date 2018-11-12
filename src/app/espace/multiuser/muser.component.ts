import { Component} from '@angular/core';
import { muserNavigation } from './navigation/muser-navigation';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
//import { Data, AppService } from '../../front/app.service';
//import { Product } from '../../front/app.models';
//import { MatDialog } from '@angular/material';


@Component({
    selector: 'app-muser',
    templateUrl: './muser.component.html',
    styleUrls: ['./muser.component.scss']
})
export class MultiUserComponent {  
    navigation: any;
	bool_acheteur ="empty";
	bool_administrateur ="empty";
	bool_fournisseur ="empty";
	bool_animateur ="empty";
    constructor(private _fuseNavigationService: FuseNavigationService){

        this.navigation = muserNavigation;
        
        // Register the navigation to the service
        this._fuseNavigationService.register('muser', this.navigation);

        // Set the main navigation as our current navigation
        this._fuseNavigationService.setCurrentNavigation('muser');
    }
}

