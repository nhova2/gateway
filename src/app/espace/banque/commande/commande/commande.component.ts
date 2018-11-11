import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {

  displayedColumns: string[] = ['Produit', 'Description', 'Quantite', 'Prix', 'Supprimer'];
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
  { Produit: 'assets/images/products/headset/3-small.png', Description: 'lorem ipsum dolor si amet', Quantite: '4', Prix: '20 000', Supprimer: '' },
  { Produit: 'assets/images/products/phone/2-small.png', Description: 'lorem ipsum dolor si amet', Quantite: '8', Prix: '20 000', Supprimer: '' },
  
];

export interface CommandeElement {
  Produit: string;
  Description: string;
  Quantite: string;
  Prix: string;
  Supprimer: string;
}
