import { Component, OnInit,ViewChild, HostListener  } from '@angular/core';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';


@Component({
    selector: 'app-produit',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
  })

export class ServiceComponent {
  @ViewChild('sidenav') sidenav: any;
  public sidenavOpen: boolean = true;
  public brands = [];
  public viewCol: number = 25;
  /**
       * Constructor
       *
       * 
       * @param {FuseSidebarService} _fuseSidebarService
       * 
       */

  constructor(private _fuseSidebarService: FuseSidebarService) {}
  public slides = [
    { title: 'The biggest sale', subtitle: '...   ...', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' }
  ];
  
  ngOnInit() {
    if (window.innerWidth < 960) {
      this.sidenavOpen = false;
    };
    if (window.innerWidth < 1280) {
      this.viewCol = 33.3;
    };
  }
  toggleSidebar(name): void
    {
        // TODO 
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    }
}