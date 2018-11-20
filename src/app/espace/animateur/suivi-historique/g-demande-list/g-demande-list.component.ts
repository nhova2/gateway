import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';

@Component({
  selector: 'app-g-demande-list',
  templateUrl: './g-demande-list.component.html',
  styleUrls: ['./g-demande-list.component.scss']
})
export class GDemandeListComponent implements OnInit {
  displayedColumns: string[] = ['NoDemande', 'Emetteur', 'Date_Emission', 'Type', 'Details', 'Modifier', 'Supprimer'];
  dataSource = new MatTableDataSource<CommandeElement>(ELEMENT_DATA);
crudComp: CrudPopupComponent;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

constructor(private parCrud: CrudPopupComponent)
	{
		this.crudComp=this.parCrud;
	}
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
  { NoDemande: '12340UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Type: 'NLS', Details: '', Modifier: '', Supprimer: '' },
  { NoDemande: '12350UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Type: 'NLS', Details: '', Modifier: '', Supprimer: '' },
  { NoDemande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Type: 'NLS', Details: '', Modifier: '', Supprimer: '' },
  { NoDemande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Type: 'NLS', Details: '', Modifier: '', Supprimer: '' },
  { NoDemande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Type: 'NLS', Details: '', Modifier: '', Supprimer: '' },
  { NoDemande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Type: 'ANS', Details: '', Modifier: '', Supprimer: '' },
  { NoDemande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Type: 'ANS', Details: '', Modifier: '', Supprimer: '' },
  { NoDemande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Type: 'ANS', Details: '', Modifier: '', Supprimer: '' },
  { NoDemande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Type: 'ANS', Details: '', Modifier: '', Supprimer: '' },
  { NoDemande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Type: 'ANS', Details: '', Modifier: '', Supprimer: '' },
  { NoDemande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Type: 'ANS', Details: '', Modifier: '', Supprimer: '' },
  { NoDemande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Type: 'OMT', Details: '', Modifier: '', Supprimer: '' },
  { NoDemande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Type: 'OMT', Details: '', Modifier: '', Supprimer: '' },
  { NoDemande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Type: 'OMT', Details: '', Modifier: '', Supprimer: '' },
  { NoDemande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Type: 'OMT', Details: '', Modifier: '', Supprimer: '' },
  { NoDemande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Type: 'OMT', Details: '', Modifier: '', Supprimer: '' },
  { NoDemande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Type: 'OMT', Details: '', Modifier: '', Supprimer: '' },
  { NoDemande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Type: 'OMT', Details: '', Modifier: '', Supprimer: '' },
  { NoDemande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Type: 'OMT', Details: '', Modifier: '', Supprimer: '' },
  { NoDemande: '12370UIXS', Emetteur: 'NLS', Date_Emission: '10/01/18', Type: 'OMT', Details: '', Modifier: '', Supprimer: '' },
];

export interface CommandeElement {
  NoDemande: string;
  Emetteur: string;
  Date_Emission: string;
  Type: string;
  Details: string;
  Modifier: string;
  Supprimer: string;
}
