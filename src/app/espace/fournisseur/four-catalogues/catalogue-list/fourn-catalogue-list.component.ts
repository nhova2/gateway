import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-focatalogue-list',
  templateUrl: './fourn-catalogue-list.component.html',
  styleUrls: ['./fourn-catalogue-list.component.scss']
})

export class FoCatalogueListComponent implements OnInit {
  displayedColumns: string[] = ['NoFoCatalogue', 'FoCode', 'Designation', 'Prix', 'Details', 'Modifier', 'Supprimer'];
  dataSource = new MatTableDataSource<FoCatalogueElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


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
const ELEMENT_DATA: FoCatalogueElement[] = [
  { NoFoCatalogue: '1', FoCode: '12YJH3JJH', Designation: 'Produit A', Prix: '3000 XOF', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCatalogue: '2', FoCode: '12350UIXS', Designation: 'Produit A', Prix: '3000 XOF', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCatalogue: '3', FoCode: '12YJH3JJH', Designation: 'Produit A', Prix: '3000 XOF', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCatalogue: '4', FoCode: '12YJH3JJH', Designation: 'Produit A', Prix: '3000 XOF', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCatalogue: '5', FoCode: '12YJH3JJH', Designation: 'Produit A', Prix: '3000 XOF', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCatalogue: '6', FoCode: '12YJH3JJH', Designation: 'Produit A', Prix: '3000 XOF', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCatalogue: '7', FoCode: '12YJH3JJH', Designation: 'Produit A', Prix: '3000 XOF', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCatalogue: '8', FoCode: '12YJH3JJH', Designation: 'Produit A', Prix: '3000 XOF', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCatalogue: '9', FoCode: '12YJH3JJH', Designation: 'Produit A', Prix: '3000 XOF', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCatalogue: '10', FoCode: '12YJH3JJH', Designation: 'Produit A', Prix: '3000 XOF', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCatalogue: '11', FoCode: '12YJH3JJH', Designation: 'Produit A', Prix: '3000 XOF', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCatalogue: '12', FoCode: '12YJH3JJH', Designation: 'Produit A', Prix: '3000 XOF', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCatalogue: '13', FoCode: '12YJH3JJH', Designation: 'Produit A', Prix: '3000 XOF', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCatalogue: '14', FoCode: '12YJH3JJH', Designation: 'Produit A', Prix: '3000 XOF', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCatalogue: '15', FoCode: '12YJH3JJH', Designation: 'Produit A', Prix: '3000 XOF', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCatalogue: '16', FoCode: '12YJH3JJH', Designation: 'Produit A', Prix: '3000 XOF', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCatalogue: '17', FoCode: '12YJH3JJH', Designation: 'Produit A', Prix: '3000 XOF', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCatalogue: '18', FoCode: '12YJH3JJH', Designation: 'Produit A', Prix: '3000 XOF', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCatalogue: '19', FoCode: '12YJH3JJH', Designation: 'Produit A', Prix: '3000 XOF', Details: '', Modifier: '', Supprimer: '' },
  { NoFoCatalogue: '20', FoCode: '12YJH3JJH', Designation: 'Produit A', Prix: '3000 XOF', Details: '', Modifier: '', Supprimer: '' },
];

export interface FoCatalogueElement {
  NoFoCatalogue: string;
  FoCode: string;
  Designation: string;
  Prix: string;
  Details: string;
  Modifier: string;
  Supprimer: string;
}
