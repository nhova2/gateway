import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-update-produit-dialog',
  templateUrl: './update-produit-dialog.component.html',
  styleUrls: ['./update-produit-dialog.component.scss']
})
export class UpdateProduitDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
