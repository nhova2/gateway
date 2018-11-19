import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';


@Component({
  selector: 'app-focommande-list',
  templateUrl: './fourn-commande-list.component.html',
  styleUrls: ['./fourn-commande-list.component.scss']
})

export class FoCommandeListComponent implements OnInit {
  displayedColumns: string[] = ['NoFoCommande', 'Emetteur', 'Date_Emission', 'Reglement', 'Details', 'Modifier', 'Supprimer'];
  dataSource = new MatTableDataSource<FoCommandeElement>(ELEMENT_DATA);
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
const ELEMENT_DATA: FoCommandeElement[] = [
  { NoFoCommande: '12340UIXS', Emetteur: 'R. ND', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12350UIXS', Emetteur: 'R. ND', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'R. ND', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'R. ND', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'R. ND', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'R. ND', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'R. ND', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'R. ND', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'R. ND', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'R. ND', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'R. ND', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'R. ND', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'R. ND', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'R. ND', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'R. ND', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'R. ND', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'R. ND', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'R. ND', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'R. ND', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'R. ND', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
];

export interface FoCommandeElement {
  NoFoCommande: string;
  Emetteur: string;
  Date_Emission: string;
  Reglement: string;
  Details: string;
  Modifier: string;
  Supprimer: string;
}
