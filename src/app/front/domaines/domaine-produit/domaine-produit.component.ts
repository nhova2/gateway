import { Component, OnInit } from '@angular/core';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

@Component({
  selector: 'app-domaine-produit',
  templateUrl: './domaine-produit.component.html',
  styleUrls: ['./domaine-produit.component.scss']
})
export class DomaineProduitComponent implements OnInit {
  public slides = [
    { title: 'The biggest sale', subtitle: '...   ...', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' }
  ];


/**
   * Constructor
   *
   * 
   * @param {FuseSidebarService} _fuseSidebarService
   * 
   */
constructor(private _fuseSidebarService: FuseSidebarService) { }

  ngOnInit() {
  }

  toggleSidebar(name): void {
    // TODO 
    this._fuseSidebarService.getSidebar(name).toggleOpen();
  }

}
