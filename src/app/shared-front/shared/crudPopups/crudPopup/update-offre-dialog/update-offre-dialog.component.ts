import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-update-offre-dialog',
  templateUrl: './update-offre-dialog.component.html',
  styleUrls: ['./update-offre-dialog.component.scss']
})
export class UpdateOffreDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
