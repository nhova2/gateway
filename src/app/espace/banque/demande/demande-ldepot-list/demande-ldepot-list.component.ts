import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-demande-ldepot-list',
  templateUrl: './demande-ldepot-list.component.html',
  styleUrls: ['./demande-ldepot-list.component.scss']
})
export class DemandeLdepotListComponent implements OnInit {

  displayedColumns: string[] = ['Animateur', 'Motif', 'Date_Creation', 'Montant', 'Statut', 'Details', 'Supprimer'];
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
  { Animateur: 'NCP', Motif: 'Achat semence', Date_Creation: '20/01/18', Montant: '20 000', Statut: 'En cours', Details: '', Supprimer: '' },
  { Animateur: 'NCP', Motif: 'engrais', Date_Creation: '20/01/18', Montant: '20 000', Statut: 'En cours', Details: '', Supprimer: '' },

];

export interface CommandeElement {
  Animateur: string;
  Motif: string;
  Date_Creation: string;
  Montant: string;
  Statut: string;
  Details: string;
  Supprimer: string;
}
