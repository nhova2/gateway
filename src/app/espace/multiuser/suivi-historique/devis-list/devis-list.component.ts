import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-devis-list',
  templateUrl: './devis-list.component.html',
  styleUrls: ['./devis-list.component.scss']
})
export class DevisListComponent implements OnInit {
  displayedColumns: string[] = ['NoDevis', 'Emetteur', 'Creation', 'Reponse', 'Details', 'Modifier', 'Supprimer'];
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
  { NoDevis: '12340UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Multiuser A', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12350UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Multiuser B', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Multiuser C', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Multiuser D', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Multiuser E', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Multiuser F', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Multiuser G', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Multiuser H', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Multiuser I', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Multiuser J', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Multiuser K', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Multiuser L', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Multiuser M', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Multiuser N', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Multiuser O', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Multiuser P', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Multiuser Q', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Multiuser R', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Multiuser S', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Multiuser T', Details: '', Modifier: '', Supprimer: '' },
];

export interface CommandeElement {
  NoDevis: string;
  Emetteur: string;
  Creation: string;
  Reponse: string;
  Details: string;
  Modifier: string;
  Supprimer: string;
}
