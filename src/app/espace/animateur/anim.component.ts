import { Component} from '@angular/core';
//import { Data, AppService } from '../../front/app.service';
//import { Product } from '../../front/app.models';
//import { MatDialog } from '@angular/material';
import { animNavigation } from 'app/espace/animateur/navigation/anim-navigation';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';

@Component({
    selector: 'app-anim',
    templateUrl: './anim.component.html',
    styleUrls: ['./anim.component.scss']
})
export class AnimateurComponent {  
    navigation: any;
	title = "empty";
    constructor(private _fuseNavigationService: FuseNavigationService){

        this.navigation = animNavigation;
        
        // Register the navigation to the service
        this._fuseNavigationService.register('anim', this.navigation);

        // Set the main navigation as our current navigation
        this._fuseNavigationService.setCurrentNavigation('anim');
    }
}

