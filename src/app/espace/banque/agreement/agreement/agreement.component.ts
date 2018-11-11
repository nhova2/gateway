import { Component, OnInit , ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.scss']
})
export class AgreementComponent implements OnInit {
  displayedColumns: string[] = ['Nom', 'Niveau_Agreement', 'Date', 'Agree_Par', 'Modifier', 'Supprimer'];
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
  { Nom: '12340UIXS', Niveau_Agreement: '5', Date: '18/04/18', Agree_Par: 'NSP', Modifier: '', Supprimer: '' },
  { Nom: '12340UIXS', Niveau_Agreement: '5', Date: '18/04/18', Agree_Par: 'NSP', Modifier: '', Supprimer: '' },
  { Nom: '12340UIXS', Niveau_Agreement: '5', Date: '18/04/18', Agree_Par: 'NSP', Modifier: '', Supprimer: '' },
  { Nom: '12340UIXS', Niveau_Agreement: '5', Date: '18/04/18', Agree_Par: 'NSP', Modifier: '', Supprimer: '' },
  { Nom: '12340UIXS', Niveau_Agreement: '5', Date: '18/04/18', Agree_Par: 'NSP', Modifier: '', Supprimer: '' },
  { Nom: '12340UIXS', Niveau_Agreement: '5', Date: '18/04/18', Agree_Par: 'NSP', Modifier: '', Supprimer: '' },
  { Nom: '12340UIXS', Niveau_Agreement: '5', Date: '18/04/18', Agree_Par: 'NSP', Modifier: '', Supprimer: '' },
  ];

export interface CommandeElement {
  Nom: string;
  Niveau_Agreement: string;
  Date: string;
  Agree_Par: string;
  Modifier: string;
  Supprimer: string;
}