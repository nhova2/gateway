import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-details-demande-devis',
  templateUrl: './details-demande-devis.component.html',
  styleUrls: ['./details-demande-devis.component.scss']
})
export class DetailsDemandeDevisComponent implements OnInit {

  displayedColumns: string[] = ['Denomination', 'Unite', 'Quantite'];
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
  { Denomination: '500XA', Unite: 'kg', Quantite: '25' },
  { Denomination: 'Y855', Unite: 'kg', Quantite: '80' },
  { Denomination: 'z500', Unite: 'kg', Quantite: '1500' },

];

export interface CommandeElement {
  Denomination: string;
  Unite: string;
  Quantite: string;
}

