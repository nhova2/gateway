import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-suivi-depot',
  templateUrl: './suivi-depot.component.html',
  styleUrls: ['./suivi-depot.component.scss']
})
export class SuiviDepotComponent implements OnInit {

  displayedColumns: string[] = ['Denomination', 'Montant_Plafond', 'Accorde_a', 'Details'];
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
  { Denomination: 'Ligne de credit A', Montant_Plafond: '50 000', Accorde_a: 'Animateur A', Details: '' },
  { Denomination: 'Ligne de credit B', Montant_Plafond: '50 000', Accorde_a: 'Animateur B', Details: '' },
  { Denomination: 'Ligne de credit C', Montant_Plafond: '50 000', Accorde_a: 'Animateur C', Details: '' },

];

export interface CommandeElement {
  Denomination: string;
  Montant_Plafond: string;
  Accorde_a: string;
  Details: string;
}

