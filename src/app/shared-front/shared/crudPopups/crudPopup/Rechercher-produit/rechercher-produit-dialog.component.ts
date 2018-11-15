import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-product-dialog',
  templateUrl: './rechercher-produit-dialog.component.html',
  styleUrls: ['./rechercher-produit-dialog.component.scss']
})
export class RechercherProduitComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
