import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-operation-dialog',
  templateUrl: './create-operation-dialog.component.html',
  styleUrls: ['./create-operation-dialog.component.scss']
})
export class CreateOperationDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
