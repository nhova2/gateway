import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  produit: string;
  position: number;
  rating: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, produit: 'produit 1', rating: '', description: 'lorem ipsum dolor si amet'},
  { position: 2, produit: 'produit 2', rating: '', description: 'lorem ipsum dolor si amet'},
  { position: 3, produit: 'produit 3', rating: '', description: 'lorem ipsum dolor si amet'},
  { position: 4, produit: 'produit 4', rating: '', description: 'lorem ipsum dolor si amet'},
  { position: 5, produit: 'produit 5', rating: '', description: 'lorem ipsum dolor si amet'},
  { position: 6, produit: 'produit 6', rating: '', description: 'lorem ipsum dolor si amet'},
  { position: 7, produit: 'produit 7', rating: '', description: 'lorem ipsum dolor si amet'},
  { position: 8, produit: 'produit 8', rating: '', description: 'lorem ipsum dolor si amet'},
  { position: 9, produit: 'produit 9', rating: '', description: 'lorem ipsum dolor si amet'},
  { position: 10, produit: 'produit 10', rating: '', description: 'lorem ipsum dolor si amet'},
];

@Component({
  selector: 'app-demand-devis-formulaire',
  templateUrl: './demand-devis-formulaire.component.html',
  styleUrls: ['./demand-devis-formulaire.component.scss']
})
export class DemandDevisFormulaireComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'produit', 'rating', 'description'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  ngOnInit(){

  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
