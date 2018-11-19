import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';


@Component({
  selector: 'app-fooffre-list',
  templateUrl: './fourn-offre-list.component.html',
  styleUrls: ['./fourn-offre-list.component.scss']
})

export class FoOffreListComponent implements OnInit {
  displayedColumns: string[] = ['NoFoOffre', 'Description', 'Img', 'Emetteur','Repondre'];
  dataSource = new MatTableDataSource<FoOffreElement>(ELEMENT_DATA);
crudComp: CrudPopupComponent;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

constructor(private parCrud: CrudPopupComponent)
	{
		this.crudComp=this.parCrud;
	}
	
  ngOnInit(){

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
const ELEMENT_DATA: FoOffreElement[] = [
  { NoFoOffre: '1',Description: 'Some Text', Img: 'assets/images/domaine/agriculture.png', Emetteur: 'Nom. Prenom', Repondre: '' },
  { NoFoOffre: '2',Description: 'Some Text', Img: 'assets/images/domaine/agriculture.png', Emetteur: 'Nom. Prenom', Repondre: '' },
  { NoFoOffre: '3',Description: 'Some Text', Img: 'assets/images/domaine/agriculture.png', Emetteur: 'Nom. Prenom', Repondre: '' },
  { NoFoOffre: '4',Description: 'Some Text', Img: 'assets/images/domaine/agriculture.png', Emetteur: 'Nom. Prenom', Repondre: '' },
  { NoFoOffre: '5',Description: 'Some Text', Img: 'assets/images/domaine/agriculture.png', Emetteur: 'Nom. Prenom', Repondre: '' },
  { NoFoOffre: '6',Description: 'Some Text', Img: 'assets/images/domaine/agriculture.png', Emetteur: 'Nom. Prenom', Repondre: '' },
  { NoFoOffre: '7',Description: 'Some Text', Img: 'assets/images/domaine/agriculture.png', Emetteur: 'Nom. Prenom', Repondre: '' },
  { NoFoOffre: '8',Description: 'Some Text', Img: 'assets/images/domaine/elevage.png', Emetteur: 'Nom. Prenom', Repondre: '' },
  { NoFoOffre: '9',Description: 'Some Text', Img: 'assets/images/domaine/elevage.png', Emetteur: 'Nom. Prenom', Repondre: '' },
  { NoFoOffre: '10',Description: 'Some Text', Img: 'assets/images/domaine/elevage.png', Emetteur: 'Nom. Prenom', Repondre: '' },
  { NoFoOffre: '11',Description: 'Some Text', Img: 'assets/images/domaine/elevage.png', Emetteur: 'Nom. Prenom', Repondre: '' },
  { NoFoOffre: '12',Description: 'Some Text', Img: 'assets/images/domaine/peche.png', Emetteur: 'Nom. Prenom', Repondre: '' },
  { NoFoOffre: '13',Description: 'Some Text', Img: 'assets/images/domaine/elevage.png', Emetteur: 'Nom. Prenom', Repondre: '' },
  { NoFoOffre: '14',Description: 'Some Text', Img: 'assets/images/domaine/peche.png', Emetteur: 'Nom. Prenom', Repondre: '' },
  { NoFoOffre: '15',Description: 'Some Text', Img: 'assets/images/domaine/peche.png', Emetteur: 'Nom. Prenom', Repondre: '' },
  { NoFoOffre: '16',Description: 'Some Text', Img: 'assets/images/domaine/agriculture.png', Emetteur: 'Nom. Prenom', Repondre: '' },
  { NoFoOffre: '17',Description: 'Some Text', Img: 'assets/images/domaine/peche.png', Emetteur: 'Nom. Prenom', Repondre: '' },
  { NoFoOffre: '18',Description: 'Some Text', Img: 'assets/images/domaine/agriculture.png', Emetteur: 'Nom. Prenom', Repondre: '' },
  { NoFoOffre: '19',Description: 'Some Text', Img: 'assets/images/domaine/agriculture.png', Emetteur: 'Nom. Prenom', Repondre: '' },
  { NoFoOffre: '20',Description: 'Some Text', Img: 'assets/images/domaine/agriculture.png', Emetteur: 'Nom. Prenom', Repondre: '' },
];


export interface FoOffreElement {
  NoFoOffre: string;
  Description: string;
  Img: string;
  Emetteur: string;
  Repondre: string;
}
