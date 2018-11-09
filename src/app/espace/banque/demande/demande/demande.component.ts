import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.scss']
})
export class DemandeComponent implements OnInit {
  displayedColumns: string[] = ['Animateur', 'Montant_Plafond', 'Date_Creation', 'Montant', 'Statut', 'Details', 'Supprimer'];
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
  { Animateur: 'NCP', Montant_Plafond: '100 000', Date_Creation: '20/01/18', Montant: '20 000', Statut: 'En cours', Details: '', Supprimer: '' },
  { Animateur: 'NCP', Montant_Plafond: '100 000', Date_Creation: '20/01/18', Montant: '20 000', Statut: 'En cours', Details: '', Supprimer: '' },
  { Animateur: 'NCP', Montant_Plafond: '100 000', Date_Creation: '20/01/18', Montant: '20 000', Statut: 'En cours', Details: '', Supprimer: '' },
  { Animateur: 'NCP', Montant_Plafond: '100 000', Date_Creation: '20/01/18', Montant: '20 000', Statut: 'En cours', Details: '', Supprimer: '' },
  { Animateur: 'NCP', Montant_Plafond: '100 000', Date_Creation: '20/01/18', Montant: '20 000', Statut: 'En cours', Details: '', Supprimer: '' },
  { Animateur: 'NCP', Montant_Plafond: '100 000', Date_Creation: '20/01/18', Montant: '20 000', Statut: 'En cours', Details: '', Supprimer: '' },
  { Animateur: 'NCP', Montant_Plafond: '100 000', Date_Creation: '20/01/18', Montant: '20 000', Statut: 'En cours', Details: '', Supprimer: '' },
  { Animateur: 'NCP', Montant_Plafond: '100 000', Date_Creation: '20/01/18', Montant: '20 000', Statut: 'En cours', Details: '', Supprimer: '' },
  { Animateur: 'NCP', Montant_Plafond: '100 000', Date_Creation: '20/01/18', Montant: '20 000', Statut: 'En cours', Details: '', Supprimer: '' },
 
];

export interface CommandeElement {
  Animateur: string;
  Montant_Plafond: string;
  Date_Creation: string;
  Montant: string;
  Statut: string;
  Details: string;
  Supprimer: string;
}
