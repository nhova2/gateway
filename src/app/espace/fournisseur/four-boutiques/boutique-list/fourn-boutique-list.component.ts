import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';


@Component({
  selector: 'app-foboutique-list',
  templateUrl: './fourn-boutique-list.component.html',
  styleUrls: ['./fourn-boutique-list.component.scss']
})

export class FoBoutiqueListComponent implements OnInit {
  displayedColumns: string[] = ['NoFoBoutique', 'Nom', 'Date_Emission', 'Adresse','Contact', 'Details', 'Modifier', 'Supprimer'];
  dataSource = new MatTableDataSource<FoBoutiqueElement>(ELEMENT_DATA);
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
const ELEMENT_DATA: FoBoutiqueElement[] = [
  { NoFoBoutique: '1', Nom: 'BOU0001', Date_Emission: '10/01/18', Adresse: 'Sangaga A',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoBoutique: '2', Nom: 'MAG0002', Date_Emission: '10/01/18', Adresse: 'Sandaga C',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoBoutique: '3', Nom: 'BOU0001', Date_Emission: '10/01/18', Adresse: 'Sandaga C',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoBoutique: '4', Nom: 'BOU0001', Date_Emission: '10/01/18', Adresse: 'Sandaga C',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoBoutique: '5', Nom: 'BOU0001', Date_Emission: '10/01/18', Adresse: 'Sandaga C',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoBoutique: '6', Nom: 'BOU0001', Date_Emission: '10/01/18', Adresse: 'Sandaga F',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoBoutique: '7', Nom: 'BOU0001', Date_Emission: '10/01/18', Adresse: 'Sangaga A',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoBoutique: '8', Nom: 'BOU0001', Date_Emission: '10/01/18', Adresse: 'Sandaga F',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoBoutique: '9', Nom: 'BOU0001', Date_Emission: '10/01/18', Adresse: 'Sandaga F',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoBoutique: '10', Nom: 'BOU0001', Date_Emission: '10/01/18', Adresse: 'Sandaga B',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoBoutique: '11', Nom: 'BOU0001', Date_Emission: '10/01/18', Adresse: 'Sandaga B',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoBoutique: '12', Nom: 'BOU0001', Date_Emission: '10/01/18', Adresse: 'Sandaga B',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoBoutique: '13', Nom: 'BOU0001', Date_Emission: '10/01/18', Adresse: 'Sandaga B',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoBoutique: '14', Nom: 'BOU0001', Date_Emission: '10/01/18', Adresse: 'Sandaga B',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoBoutique: '15', Nom: 'BOU0001', Date_Emission: '10/01/18', Adresse: 'Sandaga A',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoBoutique: '16', Nom: 'BOU0001', Date_Emission: '10/01/18', Adresse: 'Sandaga A',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoBoutique: '17', Nom: 'BOU0001', Date_Emission: '10/01/18', Adresse: 'Sandaga A',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoBoutique: '18', Nom: 'BOU0001', Date_Emission: '10/01/18', Adresse: 'Sandaga A',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoBoutique: '19', Nom: 'BOU0001', Date_Emission: '10/01/18', Adresse: 'Sandaga C',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoBoutique: '20', Nom: 'BOU0001', Date_Emission: '10/01/18', Adresse: 'Sandaga C',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
];

export interface FoBoutiqueElement {
  NoFoBoutique: string;
  Nom: string;
  Date_Emission: string;
  Adresse: string;
  Contact: string;
  Details: string;
  Modifier: string;
  Supprimer: string;
}
