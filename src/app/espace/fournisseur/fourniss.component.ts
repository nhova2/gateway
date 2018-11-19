import { Component} from '@angular/core';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { fournissNavigation } from './navigation/fourniss-navigation';
import { Globals } from 'app/globals/Globals.element';
import { Router } from '@angular/router';
import { acheteurNavigation } from '../acheteur/navigation/acheteurNavigation';
import { banqueNavigation } from '../banque/navigation/banqueNavigation';
import { animNavigation } from '../animateur/navigation/anim-navigation';
import { adminNavigation } from '../administrateur/navigation/admin-navigation';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';

@Component({
    selector: 'app-fourniss',
    templateUrl: './fourniss.component.html',
    styleUrls: ['./fourniss.component.scss']
})
export class FournisseurComponent {  
    navigation: any;
	crudComp: CrudPopupComponent;
	role:string;
	roles = [
        { Name: 'Acheteur', value: '1',routing:'/shopping'},
        { Name: 'Banque', value: '2',routing:'/banque'},
        { Name: 'Fournisseur', value: '3',routing:'/main-magasin'},
        { Name: 'Animateur', value: '4',routing:'/main-anim'},
        { Name: 'Administrateur', value: '5',routing:'/main'}
        ];
    constructor(private _fuseNavigationService: FuseNavigationService, private globals: Globals,private router: Router,private parCrud: CrudPopupComponent){
        this.navigation = fournissNavigation;
		this.role=this.globals.role;
        this.crudComp=this.parCrud;
        // Register the navigation to the service
        this._fuseNavigationService.register('fourniss', this.navigation);

        // Set the main navigation as our current navigation
        this._fuseNavigationService.setCurrentNavigation('fourniss');
        console.log("FournisseurComponent role:"+this.role);
    }
   
    ngOnInit() { }
	 
    changeNavigation(value):void
    {
        console.log("FournisseurComponent changeNavigation :"+value);
        if(value=="1")
        {
            this.navigation = acheteurNavigation;
			this._fuseNavigationService.register('fourniss-ach', this.navigation);
			this._fuseNavigationService.setCurrentNavigation('fourniss-ach');
            this.router.navigate(['shopping']);
        }
        else if (value=="2")
        {
            this.navigation = banqueNavigation;
			this._fuseNavigationService.register('fourniss-banq', this.navigation);
			this._fuseNavigationService.setCurrentNavigation('fourniss-banq');
            this.router.navigate(['banque']);
        }
        else if (value=="3")
        {
            this.navigation = fournissNavigation;
			this._fuseNavigationService.register('fourniss-four', this.navigation);
			this._fuseNavigationService.setCurrentNavigation('fourniss-four');
            this.router.navigate(['main-magasin']);
        }
        else if (value=="4")
        {
            this.navigation = animNavigation;
			this._fuseNavigationService.register('fourniss-anim', this.navigation);
			this._fuseNavigationService.setCurrentNavigation('fourniss-anim');
            this.router.navigate(['main-anim']);
        }
        else if (value=="5")
        {
            this.navigation = adminNavigation;
			this._fuseNavigationService.register('fourniss-admin', this.navigation);
			this._fuseNavigationService.setCurrentNavigation('fourniss-admin');
            this.router.navigate(['']);
        }
    }
}

