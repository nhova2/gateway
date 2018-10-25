import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-update-demande-financement-devis-dialog',
  templateUrl: './update-demande-financement-devis-dialog.component.html',
  styleUrls: ['./update-demande-financement-devis-dialog.component.scss']
})
export class UpdateDemandeFinancementDevisDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
