import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Data, AppService } from '../../front/app.service';
import { Product } from '../../front/app.models';
import { MatDialog } from '@angular/material';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { navigation } from 'app/navigation/navigation';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('sidenav') sidenav: any;
  public sidenavOpen: boolean = true;
  public brands = [];

  /**
     * Constructor
     *
     * 
     * @param {FuseSidebarService} _fuseSidebarService
     * 
     */

  constructor(public appService: AppService, 
    private _fuseNavigationService: FuseNavigationService,
    private _fuseSidebarService: FuseSidebarService) {

    this.navigation = navigation;

    // Register the navigation to the service
    this._fuseNavigationService.register('main', this.navigation);

    // Set the main navigation as our current navigation
    this._fuseNavigationService.setCurrentNavigation('main');


   }
  public topRatedProducts: Array<Product>;
  public viewCol: number = 25;
  navigation: any;

  public slides = [
    { title: 'The biggest sale', subtitle: '...   ...', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' }
  ];

  ngOnInit() {
    this.getBrands();
    this.getProducts();
    if (window.innerWidth < 960) {
      this.sidenavOpen = false;
    };
    if (window.innerWidth < 1280) {
      this.viewCol = 33.3;
    };
  }
  public getBrands() {
    this.brands = this.appService.getBrands();
  }

  public getProducts() {
    this.appService.getProducts('top-rated').subscribe(data => {
      this.topRatedProducts = data;
    });
  }

 @HostListener('window:resize')
  public onWindowResize(): void {
    (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
  }

  toggleSidebar(name): void
    {
        // TODO 
    this._fuseSidebarService.getSidebar(name).toggleOpen();
    }
}