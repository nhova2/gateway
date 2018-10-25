import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-enchere-dialog',
  templateUrl: './create-enchere-dialog.component.html',
  styleUrls: ['./create-enchere-dialog.component.scss']
})
export class CreateEnchereDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
