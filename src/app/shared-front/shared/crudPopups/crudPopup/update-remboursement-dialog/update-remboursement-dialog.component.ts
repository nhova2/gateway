import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-update-remboursement-dialog',
  templateUrl: './update-remboursement-dialog.component.html',
  styleUrls: ['./update-remboursement-dialog.component.scss']
})
export class UpdateRemboursementDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
