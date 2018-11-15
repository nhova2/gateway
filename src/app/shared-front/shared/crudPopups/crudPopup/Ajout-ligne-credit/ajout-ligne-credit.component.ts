import {Component} from '@angular/core';

export interface PeriodicElement {
  montant: number;
  denomination: string;
  dateCreation: string;
  attribue: string;
  modifier:string;
  supprimer:string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {denomination: 'Ligne credit l1', montant:100000 , dateCreation: '01/07/2018', attribue: 'Client X',modifier:'',supprimer:''},
  {denomination: 'Ligne credit l2', montant: 250000, dateCreation: '01/05/2018', attribue: 'Client X',modifier:'',supprimer:''},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-ajout-ligne-credit-dialog',
  templateUrl: './ajout-ligne-credit.component.html',
  styleUrls: ['./ajout-ligne-credit.component.scss']


})
export class AjoutLigneCreditComponent {
  displayedColumns: string[] = ['denomination', 'montant', 'dateCreation', 'attribue','modifier','supprimer'];
  dataSource = ELEMENT_DATA;
}