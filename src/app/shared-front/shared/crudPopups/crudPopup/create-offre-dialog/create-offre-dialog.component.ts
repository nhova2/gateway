import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-offre-dialog',
  templateUrl: './create-offre-dialog.component.html',
  styleUrls: ['./create-offre-dialog.component.scss']
})
export class CreateOffreDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
