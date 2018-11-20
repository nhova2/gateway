import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';


@Component({
  selector: 'app-foremboursement-list',
  templateUrl: './fourn-remboursement-list.component.html',
  styleUrls: ['./fourn-remboursement-list.component.scss']
})

export class FoRemboursementListComponent implements OnInit {
  displayedColumns: string[] = ['NoPret', 'NbreEcheance', 'Montant', 'Paiement', 'Details', 'Modifier', 'Supprimer'];
  dataSource = new MatTableDataSource<FoRemboursementElement>(ELEMENT_DATA);
crudComp: CrudPopupComponent;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

constructor(private parCrud: CrudPopupComponent)
	{
		this.crudComp=this.parCrud;
	}
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
const ELEMENT_DATA: FoRemboursementElement[] = [
  { NoPret: '12340ULOA', NbreEcheance: '12', Montant: '15.000 XOF', Paiement: 'CB', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12350ULOA', NbreEcheance: '12', Montant: '15.000 XOF', Paiement: 'CB', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370ULOA', NbreEcheance: '12', Montant: '15.000 XOF', Paiement: 'CB', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370ULOA', NbreEcheance: '12', Montant: '15.000 XOF', Paiement: 'CB', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370ULOA', NbreEcheance: '12', Montant: '15.000 XOF', Paiement: 'Orange', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370ULOA', NbreEcheance: '12', Montant: '15.000 XOF', Paiement: 'Orange', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370ULOA', NbreEcheance: '12', Montant: '15.000 XOF', Paiement: 'Orange', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370ULOA', NbreEcheance: '12', Montant: '15.000 XOF', Paiement: 'Orange', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370ULOA', NbreEcheance: '12', Montant: '15.000 XOF', Paiement: 'Orange', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370ULOA', NbreEcheance: '12', Montant: '15.000 XOF', Paiement: 'Especes', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370ULOA', NbreEcheance: '12', Montant: '15.000 XOF', Paiement: 'Especes', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370ULOA', NbreEcheance: '12', Montant: '15.000 XOF', Paiement: 'Especes', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370ULOA', NbreEcheance: '12', Montant: '15.000 XOF', Paiement: 'Especes', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370ULOA', NbreEcheance: '12', Montant: '15.000 XOF', Paiement: 'Especes', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370ULOA', NbreEcheance: '12', Montant: '15.000 XOF', Paiement: 'Especes', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370ULOA', NbreEcheance: '12', Montant: '15.000 XOF', Paiement: 'Especes', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370ULOA', NbreEcheance: '12', Montant: '15.000 XOF', Paiement: 'Especes', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370ULOA', NbreEcheance: '12', Montant: '15.000 XOF', Paiement: 'Especes', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370ULOA', NbreEcheance: '12', Montant: '15.000 XOF', Paiement: 'Especes', Details: '', Modifier: '', Supprimer: '' },
  { NoPret: '12370ULOA', NbreEcheance: '12', Montant: '15.000 XOF', Paiement: 'Especes', Details: '', Modifier: '', Supprimer: '' },
];

export interface FoRemboursementElement {
  NoPret: string;
  NbreEcheance: string;
  Montant: string;
  Paiement: string;
  Details: string;
  Modifier: string;
  Supprimer: string;
}
