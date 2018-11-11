import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-focommande-list',
  templateUrl: './fourn-commande-list.component.html',
  styleUrls: ['./fourn-commande-list.component.scss']
})

export class FoCommandeListComponent implements OnInit {
  displayedColumns: string[] = ['NoFoCommande', 'Emetteur', 'Date_Emission', 'Reglement', 'Details', 'Modifier', 'Supprimer'];
  dataSource = new MatTableDataSource<FoCommandeElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


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
  { NoFoCommande: '12340UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12350UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
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