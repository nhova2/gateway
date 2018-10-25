import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-update-service-dialog',
  templateUrl: './update-service-dialog.component.html',
  styleUrls: ['./update-service-dialog.component.scss']
})
export class UpdateServiceDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
