import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';


@Component({
  selector: 'app-folivraison-list',
  templateUrl: './fourn-livraison-list.component.html',
  styleUrls: ['./fourn-livraison-list.component.scss']
})

export class FoLivraisonListComponent implements OnInit {
  displayedColumns: string[] = ['NoFoLivraison', 'Emetteur', 'Date_Emission', 'Reglement', 'Details', 'Modifier', 'Supprimer'];
  dataSource = new MatTableDataSource<FoLivraisonElement>(ELEMENT_DATA);
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
const ELEMENT_DATA: FoLivraisonElement[] = [
  { NoFoLivraison: '12340UIXS', Emetteur: 'H. FL', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoLivraison: '12350UIXS', Emetteur: 'H. FL', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoLivraison: '12370UIXS', Emetteur: 'H. FL', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoLivraison: '12370UIXS', Emetteur: 'H. FL', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoLivraison: '12370UIXS', Emetteur: 'H. FL', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoLivraison: '12370UIXS', Emetteur: 'H. FL', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoLivraison: '12370UIXS', Emetteur: 'H. FL', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoLivraison: '12370UIXS', Emetteur: 'H. FL', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoLivraison: '12370UIXS', Emetteur: 'H. FL', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoLivraison: '12370UIXS', Emetteur: 'H. FL', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoLivraison: '12370UIXS', Emetteur: 'H. FL', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoLivraison: '12370UIXS', Emetteur: 'H. FL', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoLivraison: '12370UIXS', Emetteur: 'H. FL', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoLivraison: '12370UIXS', Emetteur: 'H. FL', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoLivraison: '12370UIXS', Emetteur: 'H. FL', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoLivraison: '12370UIXS', Emetteur: 'H. FL', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoLivraison: '12370UIXS', Emetteur: 'H. FL', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoLivraison: '12370UIXS', Emetteur: 'H. FL', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoLivraison: '12370UIXS', Emetteur: 'H. FL', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoLivraison: '12370UIXS', Emetteur: 'H. FL', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
];

export interface FoLivraisonElement {
  NoFoLivraison: string;
  Emetteur: string;
  Date_Emission: string;
  Reglement: string;
  Details: string;
  Modifier: string;
  Supprimer: string;
}
