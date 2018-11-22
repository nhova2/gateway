import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-suivi-devis',
  templateUrl: './suivi-devis.component.html',
  styleUrls: ['./suivi-devis.component.scss']
})
export class SuiviDevisComponent implements OnInit {

  displayedColumns: string[] = ['Numero', 'Fournisseur', 'Client', 'Date_Creation', 'Details'];
  dataSource = new MatTableDataSource<CommandeElement>(ELEMENT_DATA);

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
  { Numero: '500XA', Fournisseur: '58', Client: 'NDT', Date_Creation: '18/04/18', Details: '' },
  { Numero: 'Y855', Fournisseur: '89', Client: 'NDT', Date_Creation: '18/04/18', Details: '' },
  { Numero: 'z500', Fournisseur: '89', Client: 'NDT', Date_Creation: '18/04/18', Details: '' },

];

export interface CommandeElement {
  Numero: string;
  Fournisseur: string;
  Client: string;
  Date_Creation: string;
  Details: string;
}
