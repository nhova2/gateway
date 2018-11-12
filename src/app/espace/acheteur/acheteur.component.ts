import { Component, OnInit } from '@angular/core';
import { acheteurNavigation } from 'app/espace/acheteur/navigation/acheteurNavigation';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';

@Component({
  selector: 'app-acheteur',
  templateUrl: './acheteur.component.html',
  styleUrls: ['./acheteur.component.scss']
})
export class AcheteurComponent implements OnInit {

  navigation: any;
  constructor(private _fuseNavigationService: FuseNavigationService) {

    this.navigation = acheteurNavigation;

    // Register the navigation to the service
    this._fuseNavigationService.register('acheteur', this.navigation);

    // Set the main navigation as our current navigation
    this._fuseNavigationService.setCurrentNavigation('acheteur');
  }

  ngOnInit() {
  }
  
  toggleSidebar(name): void
    {
        // TODO this._fuseSidebarService.getSidebar(name).toggleOpen();
    }

}
