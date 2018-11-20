import { Component} from '@angular/core';
//import { Data, AppService } from '../../front/app.service';
//import { Product } from '../../front/app.models';
//import { MatDialog } from '@angular/material';
import { animNavigation } from 'app/espace/animateur/navigation/anim-navigation';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { Globals } from 'app/globals/Globals.element';
import { Router } from '@angular/router';
import { acheteurNavigation } from '../acheteur/navigation/acheteurNavigation';
import { banqueNavigation } from '../banque/navigation/banqueNavigation';
import { fournissNavigation } from '../fournisseur/navigation/fourniss-navigation';
import { adminNavigation } from '../administrateur/navigation/admin-navigation';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';

@Component({
    selector: 'app-anim',
    templateUrl: './anim.component.html',
    styleUrls: ['./anim.component.scss']
})
export class AnimateurComponent {  
    navigation: any;
    title = "empty";
    role:string;
	crudComp: CrudPopupComponent;
    roles = [
        { Name: 'Acheteur', value: '1',routing:'/shopping'},
        { Name: 'Banque', value: '2',routing:'/banque'},
        { Name: 'Fournisseur', value: '3',routing:'/main-magasin'},
        { Name: 'Animateur', value: '4',routing:'/main-anim'},
        { Name: 'Administrateur', value: '5',routing:'/main'}
        ];
    constructor(private _fuseNavigationService: FuseNavigationService,private globals: Globals,private router: Router,private parCrud: CrudPopupComponent){

        this.navigation = animNavigation;
        this.role=this.globals.role;
		this.crudComp=this.parCrud;
        // Register the navigation to the service
        this._fuseNavigationService.register('anim', this.navigation);

        // Set the main navigation as our current navigation
        this._fuseNavigationService.setCurrentNavigation('anim');
        console.log("AnimateurComponent role:"+this.role);
    }

    ngOnInit() { }
	 
    changeNavigation(value):void
    {
        console.log("AnimateurComponent changeNavigation :"+value);
        if(value=="1")
        {
            this.navigation = acheteurNavigation;
			this._fuseNavigationService.register('anim-ach', this.navigation);
			this._fuseNavigationService.setCurrentNavigation('anim-ach');
            this.router.navigate(['shopping']);
        }
        else if (value=="2")
        {
            this.navigation = banqueNavigation;
			this._fuseNavigationService.register('anim-banq', this.navigation);
			this._fuseNavigationService.setCurrentNavigation('anim-banq');
            this.router.navigate(['banque']);
        }
        else if (value=="3")
        {
            this.navigation = fournissNavigation;
			this._fuseNavigationService.register('anim-four', this.navigation);
			this._fuseNavigationService.setCurrentNavigation('anim-four');
            this.router.navigate(['main-magasin']);
        }
        else if (value=="4")
        {
            this.navigation = animNavigation;
			this._fuseNavigationService.register('anim-anim', this.navigation);
			this._fuseNavigationService.setCurrentNavigation('anim-anim');
            this.router.navigate(['main-anim']);
        }
        else if (value=="5")
        {
            this.navigation = adminNavigation;
			this._fuseNavigationService.register('anim-admin', this.navigation);
			this._fuseNavigationService.setCurrentNavigation('anim-admin');
            this.router.navigate(['']);
        }
    }
}

