import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-remboursement-dialog',
  templateUrl: './create-remboursement-dialog.component.html',
  styleUrls: ['./create-remboursement-dialog.component.scss']
})
export class CreateRemboursementDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
