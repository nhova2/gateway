import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';


@Component({
  selector: 'app-fomagasin-list',
  templateUrl: './fourn-magasin-list.component.html',
  styleUrls: ['./fourn-magasin-list.component.scss']
})

export class FoMagasinListComponent implements OnInit {
  displayedColumns: string[] = ['NoFoMagasin', 'Nom', 'Date_Emission', 'Adresse','Contact', 'Details', 'Modifier', 'Supprimer'];
  dataSource = new MatTableDataSource<FoMagasinElement>(ELEMENT_DATA);
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
const ELEMENT_DATA: FoMagasinElement[] = [
  { NoFoMagasin: '1', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sangaga A',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoMagasin: '2', Nom: 'MAG0002', Date_Emission: '10/01/18', Adresse: 'Sandaga C',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoMagasin: '3', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga C',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoMagasin: '4', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga C',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoMagasin: '5', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga C',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoMagasin: '6', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga F',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoMagasin: '7', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sangaga A',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoMagasin: '8', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga F',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoMagasin: '9', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga F',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoMagasin: '10', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga B',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoMagasin: '11', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga B',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoMagasin: '12', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga B',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoMagasin: '13', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga B',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoMagasin: '14', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga B',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoMagasin: '15', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga A',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoMagasin: '16', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga A',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoMagasin: '17', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga A',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoMagasin: '18', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga A',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoMagasin: '19', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga C',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoMagasin: '20', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga C',Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
];

export interface FoMagasinElement {
  NoFoMagasin: string;
  Nom: string;
  Date_Emission: string;
  Adresse: string;
  Contact: string;
  Details: string;
  Modifier: string;
  Supprimer: string;
}
