import { Component} from '@angular/core';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { fournissNavigation } from './navigation/fourniss-navigation';

@Component({
    selector: 'app-fourniss',
    templateUrl: './fourniss.component.html',
    styleUrls: ['./fourniss.component.scss']
})
export class FournisseurComponent {  
    navigation: any;
    constructor(private _fuseNavigationService: FuseNavigationService){

        this.navigation = fournissNavigation;
        
        // Register the navigation to the service
        this._fuseNavigationService.register('fourniss', this.navigation);

        // Set the main navigation as our current navigation
        this._fuseNavigationService.setCurrentNavigation('fourniss');
    }
}

