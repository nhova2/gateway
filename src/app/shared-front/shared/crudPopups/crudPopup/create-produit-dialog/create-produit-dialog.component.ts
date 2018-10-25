import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-produit-dialog',
  templateUrl: './create-produit-dialog.component.html',
  styleUrls: ['./create-produit-dialog.component.scss']
})
export class CreateProduitDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
