import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-update-enchere-dialog',
  templateUrl: './update-enchere-dialog.component.html',
  styleUrls: ['./update-enchere-dialog.component.scss']
})
export class UpdateEnchereDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
