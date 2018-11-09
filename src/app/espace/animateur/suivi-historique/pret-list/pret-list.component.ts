import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-pret-list',
  templateUrl: './pret-list.component.html',
  styleUrls: ['./pret-list.component.scss']
})
export class PretListComponent implements OnInit {
  displayedColumns: string[] = ['NoPret', 'Montant_initial', 'Date_Creation', 'Attribue_a', 'Details', 'Modifier', 'Supprimer'];
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
  { NoPret: '12340UIXS', Montant_initial: '5.000.000', Date_Creation: '10/01/18', Attribue_a: 'NLS', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12350UIXS', Montant_initial: '25.000', Date_Creation: '10/01/18', Attribue_a: 'NLS', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370UIXS', Montant_initial: '25.000', Date_Creation: '10/01/18', Attribue_a: 'NLS', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370UIXS', Montant_initial: '25.000', Date_Creation: '10/01/18', Attribue_a: 'NLS', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370UIXS', Montant_initial: '25.000', Date_Creation: '10/01/18', Attribue_a: 'NLS', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370UIXS', Montant_initial: '25.000', Date_Creation: '10/01/18', Attribue_a: 'NLS', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370UIXS', Montant_initial: '25.000', Date_Creation: '10/01/18', Attribue_a: 'SMS', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370UIXS', Montant_initial: '25.000', Date_Creation: '10/01/18', Attribue_a: 'SMS', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370UIXS', Montant_initial: '25.000', Date_Creation: '10/01/18', Attribue_a: 'SMS', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370UIXS', Montant_initial: '25.000', Date_Creation: '10/01/18', Attribue_a: 'SMS', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370UIXS', Montant_initial: '25.000', Date_Creation: '10/01/18', Attribue_a: 'SMS', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370UIXS', Montant_initial: '1.000.000', Date_Creation: '10/01/18', Attribue_a: 'TD', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370UIXS', Montant_initial: '1.000.000', Date_Creation: '10/01/18', Attribue_a: 'TD', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370UIXS', Montant_initial: '1.000.000', Date_Creation: '10/01/18', Attribue_a: 'TD', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370UIXS', Montant_initial: '1.000.000', Date_Creation: '10/01/18', Attribue_a: 'TD', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370UIXS', Montant_initial: '1.000.000', Date_Creation: '10/01/18', Attribue_a: 'TD', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370UIXS', Montant_initial: '1.000.000', Date_Creation: '10/01/18', Attribue_a: 'TD', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370UIXS', Montant_initial: '1.000.000', Date_Creation: '10/01/18', Attribue_a: 'TD', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370UIXS', Montant_initial: '1.000.000', Date_Creation: '10/01/18', Attribue_a: 'TD', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370UIXS', Montant_initial: '1.000.000', Date_Creation: '10/01/18', Attribue_a: 'TD', Details: '', Modifier: '', Supprimer: '' },
];

export interface CommandeElement {
  NoPret: string;
  Montant_initial: string;
  Date_Creation: string;
  Attribue_a: string;
  Details: string;
  Modifier: string;
  Supprimer: string;
}