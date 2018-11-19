import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';

@Component({
  selector: 'app-devis-list',
  templateUrl: './devis-list.component.html',
  styleUrls: ['./devis-list.component.scss']
})
export class DevisListComponent implements OnInit {
  displayedColumns: string[] = ['NoDevis', 'Emetteur', 'Creation', 'Reponse', 'Details', 'Modifier', 'Supprimer'];
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
  { NoDevis: '12340UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Fournisseur A', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12350UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Fournisseur B', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Fournisseur C', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Fournisseur D', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Fournisseur E', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Fournisseur F', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Fournisseur G', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Fournisseur H', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Fournisseur I', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Fournisseur J', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Fournisseur K', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Fournisseur L', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Fournisseur M', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Fournisseur N', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Fournisseur O', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Fournisseur P', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Fournisseur Q', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Fournisseur R', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Fournisseur S', Details: '', Modifier: '', Supprimer: '' },
  { NoDevis: '12370UIXS', Emetteur: 'NLS', Creation: '10/01/18', Reponse: 'Fournisseur T', Details: '', Modifier: '', Supprimer: '' },
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
