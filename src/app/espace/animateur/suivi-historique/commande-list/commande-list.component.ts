import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';


@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.scss']
})

export class CommandeListComponent implements OnInit {
  displayedColumns: string[] = ['NoCommande', 'Emetteur', 'Date_Emission', 'Reglement', 'Details', 'Modifier', 'Supprimer'];
  dataSource = new MatTableDataSource<CommandeElement>(ELEMENT_DATA);
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
const ELEMENT_DATA: CommandeElement[] = [
  { NoCommande: '12340UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoCommande: '12350UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
  { NoCommande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Reglement: '10/01/18', Details: '', Modifier: '', Supprimer: '' },
];

export interface CommandeElement {
  NoCommande: string;
  Emetteur: string;
  Date_Emission: string;
  Reglement: string;
  Details: string;
  Modifier: string;
  Supprimer: string;
}
