import { Component} from '@angular/core';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { acheteurNavigation } from '../acheteur/navigation/acheteurNavigation';
import { banqueNavigation } from '../banque/navigation/banqueNavigation';
import { fournissNavigation } from '../fournisseur/navigation/fourniss-navigation';
import { animNavigation } from '../animateur/navigation/anim-navigation';
import { adminNavigation } from '../administrateur/navigation/admin-navigation';
import { Globals } from 'app/globals/Globals.element';
import { Router } from '@angular/router';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';



@Component({
    selector: 'app-muser',
    templateUrl: './muser.component.html',
    styleUrls: ['./muser.component.scss']
})
export class MultiUserComponent {  
    navigation: any;
    event:string;
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
		this.navigation = fournissNavigation;
		this.role=this.globals.role;
		 this.crudComp=this.parCrud;
		console.log("MultiUserComponent role :"+this.role);
        // Register the navigation to the service
        this._fuseNavigationService.register('muser', this.navigation);

        // Set the main navigation as our current navigation
        this._fuseNavigationService.setCurrentNavigation('muser');
    }

	 ngOnInit() { }
	 
    changeNavigation(value):void
    {
        console.log("MultiUserComponent changeNavigation :"+value);
        if(value=="1")
        {
            this.navigation = acheteurNavigation;
			// Register the navigation to the service
			this._fuseNavigationService.register('muser-ach', this.navigation);
			// Set the main navigation as our current navigation
			this._fuseNavigationService.setCurrentNavigation('muser-ach');
            //this.router.navigate(["'/shopping'"]);
        }
        else if (value=="2")
        {
            this.navigation = banqueNavigation;
			// Register the navigation to the service
			this._fuseNavigationService.register('muser-banq', this.navigation);
			// Set the main navigation as our current navigation
			this._fuseNavigationService.setCurrentNavigation('muser-banq');
            //this.router.navigate(["'/banque'"]);
        }
        else if (value=="3")
        {
            this.navigation = fournissNavigation;
			// Register the navigation to the service
			this._fuseNavigationService.register('muser-four', this.navigation);
			// Set the main navigation as our current navigation
			this._fuseNavigationService.setCurrentNavigation('muser-four');
            //this.router.navigate(["'/main-magasin'"]);
        }
        else if (value=="4")
        {
            this.navigation = animNavigation;
			// Register the navigation to the service
			this._fuseNavigationService.register('muser-anim', this.navigation);
			// Set the main navigation as our current navigation
			this._fuseNavigationService.setCurrentNavigation('muser-anim');
            //this.router.navigate(["'/main-anim'"]);
        }
        else if (value=="5")
        {
            this.navigation = adminNavigation;
			// Register the navigation to the service
			this._fuseNavigationService.register('muser-admin', this.navigation);
			// Set the main navigation as our current navigation
			this._fuseNavigationService.setCurrentNavigation('muser-admin');
            //this.router.navigate(["'/main'"]);
        }
    }
}

