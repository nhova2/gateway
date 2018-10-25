import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-update-demande-pret-dialog',
  templateUrl: './update-demande-pret-dialog.component.html',
  styleUrls: ['./update-demande-pret-dialog.component.scss']
})
export class UpdateDemandePretDepotDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
