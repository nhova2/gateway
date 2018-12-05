import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-suivi-credit',
  templateUrl: './suivi-credit.component.html',
  styleUrls: ['./suivi-credit.component.scss']
})
export class SuiviCreditComponent implements OnInit {

  displayedColumns: string[] = ['Denomination', 'Description', 'Details'];
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
  { Denomination: 'Ligne de credit A', Description: 'Lorem ipsum dolor si amet', Details: '' },
  { Denomination: 'Ligne de credit B', Description: 'Lorem ipsum dolor si amet', Details: '' },
  { Denomination: 'Ligne de credit C', Description: 'Lorem ipsum dolor si amet', Details: '' },
  
];

export interface CommandeElement {
  Denomination: string;
  Description: string;
  Details: string;
}
