import { Component} from '@angular/core';
import { muserNavigation } from './navigation/muser-navigation';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { acheteurNavigation } from '../acheteur/navigation/acheteurNavigation';
import { banqueNavigation } from '../banque/navigation/banqueNavigation';
import { fournissNavigation } from '../fournisseur/navigation/fourniss-navigation';
import { animNavigation } from '../animateur/navigation/anim-navigation';
import { adminNavigation } from '../administrateur/navigation/admin-navigation';
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
    event:string;
	isAcheteur: boolean =true;
    isBanque: boolean =false;
    isFournisseur: boolean =false;
    isAnimateur: boolean =false;
    isAdministrateur: boolean =false;

    roles = [
        { Name: 'Acheteur', value: '1'},
        { Name: 'Banque', value: '2'},
        { Name: 'Fournisseur', value: '3'},
        { Name: 'Animateur', value: '4'},
        { Name: 'Administrateur', value: '5'}
        ];
    constructor(private _fuseNavigationService: FuseNavigationService){

        //this.navigation = muserNavigation;
        if(this.isAcheteur==true)
        {
            this.navigation = acheteurNavigation;
        }
        else if (this.isBanque==true)
        {
            this.navigation = banqueNavigation;
        }
        else if (this.isFournisseur==true)
        {
            this.navigation = fournissNavigation;
        }
        else if (this.isAnimateur==true)
        {
            this.navigation = animNavigation;
        }
        else if (this.isAdministrateur==true)
        {
            this.navigation = adminNavigation;
        }
        
        // Register the navigation to the service
        this._fuseNavigationService.register('muser', this.navigation);

        // Set the main navigation as our current navigation
        this._fuseNavigationService.setCurrentNavigation('muser');
    }

    changeNavigation(event):void
    {
        if(event=="1")
        {
            this.navigation = acheteurNavigation;
        }
        else if (event=="2")
        {
            this.navigation = banqueNavigation;
        }
        else if (event=="3")
        {
            this.navigation = fournissNavigation;
        }
        else if (event=="4")
        {
            this.navigation = animNavigation;
        }
        else if (event=="5")
        {
            this.navigation = adminNavigation;
        }
    }
}

