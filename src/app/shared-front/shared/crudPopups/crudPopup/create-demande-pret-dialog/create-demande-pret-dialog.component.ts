import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-demande-pret-dialog',
  templateUrl: './create-demande-pret-dialog.component.html',
  styleUrls: ['./create-demande-pret-dialog.component.scss']
})
export class CreateDemandePretDepotDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
