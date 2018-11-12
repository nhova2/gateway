import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

export interface PeriodicElement {
  nom: string;
  position: number;
  Description: string;
  Origine: string;
  Emetteur_offre: string;
  Contact: string;
  Date_debut_Appel_d_Offre: string;
  Date_fin_Appel_d_Offre: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1, nom: 'Hydrogen', Description: 'Engrais haute qualité',
    Origine: 'Casamance', Emetteur_offre: 'Amadou Thiam', Contact: '77445285',
    Date_debut_Appel_d_Offre: '13 / 10 / 2000', Date_fin_Appel_d_Offre: '12/01/2005'
  }
];

@Component({
  selector: 'app-details-offre',
  templateUrl: './details-offre.component.html',
  styleUrls: ['./details-offre.component.scss']
})
export class DetailsOffreComponent implements OnInit {
  displayedColumns: string[] = ['position', 'nom', 'Description', 'Origine', 'Emetteur_offre', 'Contact',
    'Date_debut_Appel_d_Offre', 'Date_fin_Appel_d_Offre' ];
  dataSource = ELEMENT_DATA;
  constructor() { }
  @ViewChild('sidenav') sidenav: any;
  public sidenavOpen: boolean = true;
  public viewCol: number = 25;

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

  @HostListener('window:resize')
  public onWindowResize(): void {
    (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
  }

   toggleSidebar(name): void
    {
        // TODO this._fuseSidebarService.getSidebar(name).toggleOpen();
    }
}
