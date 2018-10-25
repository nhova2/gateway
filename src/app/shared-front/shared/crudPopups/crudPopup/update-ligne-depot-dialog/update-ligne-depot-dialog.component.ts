import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-update-ligne-depot-dialog',
  templateUrl: './update-ligne-depot-dialog.component.html',
  styleUrls: ['./update-ligne-depot-dialog.component.scss']
})
export class UpdateLigneDepotDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
