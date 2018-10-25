import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-domaine-dialog',
  templateUrl: './create-domaine-dialog.component.html',
  styleUrls: ['./create-domaine-dialog.component.scss']
})
export class CreateDomaineDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
