import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-update-ligne-credit-dialog',
  templateUrl: './update-ligne-credit-dialog.component.html',
  styleUrls: ['./update-ligne-credit-dialog.component.scss']
})
export class UpdateLigneCreditDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
