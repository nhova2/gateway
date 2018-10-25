import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-update-activite-dialog',
  templateUrl: './update-activite-dialog.component.html',
  styleUrls: ['./update-activite-dialog.component.scss']
})
export class UpdateActiviteDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
