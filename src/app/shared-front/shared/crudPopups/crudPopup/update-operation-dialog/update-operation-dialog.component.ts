import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-update-operation-dialog',
  templateUrl: './update-operation-dialog.component.html',
  styleUrls: ['./update-operation-dialog.component.scss']
})
export class UpdateOperationDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
