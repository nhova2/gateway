import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-ligne-credit-dialog',
  templateUrl: './create-ligne-credit-dialog.component.html',
  styleUrls: ['./create-ligne-credit-dialog.component.scss']
})
export class CreateLigneCreditDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
