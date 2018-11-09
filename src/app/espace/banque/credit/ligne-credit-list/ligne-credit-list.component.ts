import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-ligne-credit-list',
  templateUrl: './ligne-credit-list.component.html',
  styleUrls: ['./ligne-credit-list.component.scss']
})
export class LigneCreditListComponent implements OnInit {
  displayedColumns: string[] = ['Denomination', 'Montant_Initial', 'Date_Creation', 'Attribue', 'Modifier', 'Supprimer'];
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
  { Denomination: '12340UIXS', Montant_Initial: 'NLS', Date_Creation: '10/01/18', Attribue: 'ncp', Modifier: '', Supprimer: '' },
  { Denomination: '12350UIXS', Montant_Initial: 'NLS', Date_Creation: '10/01/18', Attribue: 'ncp', Modifier: '', Supprimer: '' },
  { Denomination: '12370UIXS', Montant_Initial: 'NLS', Date_Creation: '10/01/18', Attribue: 'ncp', Modifier: '', Supprimer: '' },
  { Denomination: '12370UIXS', Montant_Initial: 'NLS', Date_Creation: '10/01/18', Attribue: 'ncp', Modifier: '', Supprimer: '' },
  { Denomination: '12370UIXS', Montant_Initial: 'NLS', Date_Creation: '10/01/18', Attribue: 'ncp', Modifier: '', Supprimer: '' },
  { Denomination: '12370UIXS', Montant_Initial: 'NLS', Date_Creation: '10/01/18', Attribue: 'ncp', Modifier: '', Supprimer: '' },
  { Denomination: '12370UIXS', Montant_Initial: 'NLS', Date_Creation: '10/01/18', Attribue: 'ncp', Modifier: '', Supprimer: '' },
  { Denomination: '12370UIXS', Montant_Initial: 'NLS', Date_Creation: '10/01/18', Attribue: 'ncp', Modifier: '', Supprimer: '' },
  { Denomination: '12370UIXS', Montant_Initial: 'NLS', Date_Creation: '10/01/18', Attribue: 'ncp', Modifier: '', Supprimer: '' },
  { Denomination: '12370UIXS', Montant_Initial: 'NLS', Date_Creation: '10/01/18', Attribue: 'ncp', Modifier: '', Supprimer: '' },
  { Denomination: '12370UIXS', Montant_Initial: 'NLS', Date_Creation: '10/01/18', Attribue: 'ncp', Modifier: '', Supprimer: '' },
  { Denomination: '12370UIXS', Montant_Initial: 'NLS', Date_Creation: '10/01/18', Attribue: 'ncp', Modifier: '', Supprimer: '' },
];

export interface CommandeElement {
  Denomination: string;
  Montant_Initial: string;
  Date_Creation: string;
  Attribue: string;
  Modifier: string;
  Supprimer: string;
}
