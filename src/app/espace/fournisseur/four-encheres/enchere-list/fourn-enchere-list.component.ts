import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';


@Component({
  selector: 'app-foenchere-list',
  templateUrl: './fourn-enchere-list.component.html',
  styleUrls: ['./fourn-enchere-list.component.scss']
})

export class FoEnchereListComponent implements OnInit {
  displayedColumns: string[] = ['NoFoEnchere', 'Description', 'Img', 'Emetteur','Modifier'];
  dataSource = new MatTableDataSource<FoEnchereElement>(ELEMENT_DATA);
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
const ELEMENT_DATA: FoEnchereElement[] = [
  { NoFoEnchere: '1',Description: 'Some Text', Img: 'assets/images/domaine/agriculture.png', Emetteur: 'Nom. Prenom', Modifier: '' },
  { NoFoEnchere: '2',Description: 'Some Text', Img: 'assets/images/domaine/agriculture.png', Emetteur: 'Nom. Prenom', Modifier: '' },
  { NoFoEnchere: '3',Description: 'Some Text', Img: 'assets/images/domaine/elevage.png', Emetteur: 'Nom. Prenom', Modifier: '' },
  { NoFoEnchere: '4',Description: 'Some Text', Img: 'assets/images/domaine/peche.png', Emetteur: 'Nom. Prenom', Modifier: '' },
  { NoFoEnchere: '5',Description: 'Some Text', Img: 'assets/images/domaine/elevage.png', Emetteur: 'Nom. Prenom', Modifier: '' },
  { NoFoEnchere: '6',Description: 'Some Text', Img: 'assets/images/domaine/peche.png', Emetteur: 'Nom. Prenom', Modifier: '' },
  { NoFoEnchere: '7',Description: 'Some Text', Img: 'assets/images/domaine/peche.png', Emetteur: 'Nom. Prenom', Modifier: '' },
  { NoFoEnchere: '8',Description: 'Some Text', Img: 'assets/images/domaine/elevage.png', Emetteur: 'Nom. Prenom', Modifier: '' },
  { NoFoEnchere: '9',Description: 'Some Text', Img: 'assets/images/domaine/elevage.png', Emetteur: 'Nom. Prenom', Modifier: '' },
  { NoFoEnchere: '10',Description: 'Some Text', Img: 'assets/images/domaine/elevage.png', Emetteur: 'Nom. Prenom', Modifier: '' },
  { NoFoEnchere: '11',Description: 'Some Text', Img: 'assets/images/domaine/elevage.png', Emetteur: 'Nom. Prenom', Modifier: '' },
  { NoFoEnchere: '12',Description: 'Some Text', Img: 'assets/images/domaine/elevage.png', Emetteur: 'Nom. Prenom', Modifier: '' },
  { NoFoEnchere: '13',Description: 'Some Text', Img: 'assets/images/domaine/agriculture.png', Emetteur: 'Nom. Prenom', Modifier: '' },
  { NoFoEnchere: '14',Description: 'Some Text', Img: 'assets/images/domaine/peche.png', Emetteur: 'Nom. Prenom', Modifier: '' },
  { NoFoEnchere: '15',Description: 'Some Text', Img: 'assets/images/domaine/agriculture.png', Emetteur: 'Nom. Prenom', Modifier: '' },
  { NoFoEnchere: '16',Description: 'Some Text', Img: 'assets/images/domaine/peche.png', Emetteur: 'Nom. Prenom', Modifier: '' },
  { NoFoEnchere: '17',Description: 'Some Text', Img: 'assets/images/domaine/agriculture.png', Emetteur: 'Nom. Prenom', Modifier: '' },
  { NoFoEnchere: '18',Description: 'Some Text', Img: 'assets/images/domaine/agriculture.png', Emetteur: 'Nom. Prenom', Modifier: '' },
  { NoFoEnchere: '19',Description: 'Some Text', Img: 'assets/images/domaine/agriculture.png', Emetteur: 'Nom. Prenom', Modifier: '' },
  { NoFoEnchere: '20',Description: 'Some Text', Img: 'assets/images/domaine/agriculture.png', Emetteur: 'Nom. Prenom', Modifier: '' },
];


export interface FoEnchereElement {
  NoFoEnchere: string;
  Description: string;
  Img: string;
  Emetteur: string;
  Modifier: string;
}
