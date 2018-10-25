import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-demande-financement-devis-dialog',
  templateUrl: './create-demande-financement-devis-dialog.component.html',
  styleUrls: ['./create-demande-financement-devis-dialog.component.scss']
})
export class CreateDemandeFinancementDevisDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
