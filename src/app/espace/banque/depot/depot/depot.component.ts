import { Component, OnInit , ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {
  displayedColumns: string[] = ['Plafond', 'Date_Creation', 'Attribue', 'Details', 'Modifier', 'Supprimer'];
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
  { Plafond: '500 000', Date_Creation: '18/04/18', Attribue: 'NDT', Details: '', Modifier: '', Supprimer: '' },
  { Plafond: '1 000 000', Date_Creation: '18/04/18', Attribue: 'NDT', Details: '', Modifier: '', Supprimer: '' },
  { Plafond: '800 000', Date_Creation: '18/04/18', Attribue: 'NDT', Details: '', Modifier: '', Supprimer: '' },
  
];

export interface CommandeElement {
  Plafond: string;
  Date_Creation: string;
  Attribue: string;
  Details: string;
  Modifier: string;
  Supprimer: string;
}
