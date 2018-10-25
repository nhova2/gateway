import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-update-domaine-dialog',
  templateUrl: './update-domaine-dialog.component.html',
  styleUrls: ['./update-domaine-dialog.component.scss']
})
export class UpdateDomaineDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
