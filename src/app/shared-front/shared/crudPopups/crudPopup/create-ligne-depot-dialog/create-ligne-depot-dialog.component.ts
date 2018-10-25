import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-ligne-depot-dialog',
  templateUrl: './create-ligne-depot-dialog.component.html',
  styleUrls: ['./create-ligne-depot-dialog.component.scss']
})
export class CreateLigneDepotDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
