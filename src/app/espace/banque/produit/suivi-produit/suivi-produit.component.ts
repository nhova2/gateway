import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-suivi-produit',
  templateUrl: './suivi-produit.component.html',
  styleUrls: ['./suivi-produit.component.scss']
})
export class SuiviProduitComponent implements OnInit {

  displayedColumns: string[] = ['Numero', 'Quantite', 'Client', 'Statut', 'Reglement'];
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
  { Numero: '500XA', Quantite: '58', Client: 'NDT', Statut: 'Livré', Reglement: '' },
  { Numero: 'Y855', Quantite: '89', Client: 'NDT', Statut: 'Livré', Reglement: '' },
  { Numero: 'z500', Quantite: '89', Client: 'NDT', Statut: 'Livré', Reglement: '' },

];

export interface CommandeElement {
  Numero: string;
  Quantite: string;
  Client: string;
  Statut: string;
  Reglement: string;
}
