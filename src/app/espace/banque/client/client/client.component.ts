import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
displayedColumns: string[] = ['Matricule', 'Client', 'Type' , 'Modifier', 'Supprimer'];
  dataSource = new MatTableDataSource<CommandeElement>(ELEMENT_DATA);
  crudComp: CrudPopupComponent;
  constructor(private parCrud: CrudPopupComponent) {
    this.crudComp = this.parCrud;
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {

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
  { Matricule: '12340UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
  { Matricule: '12350UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
  { Matricule: '12370UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
  { Matricule: '12370UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
  { Matricule: '12370UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
  { Matricule: '12370UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
  { Matricule: '12370UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
  { Matricule: '12370UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
  { Matricule: '12370UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
  { Matricule: '12370UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
  { Matricule: '12370UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
  { Matricule: '12370UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
];

export interface CommandeElement {
  Matricule: string;
  Client: string;
  Type: string;
  Modifier: string;
  Supprimer: string;
}