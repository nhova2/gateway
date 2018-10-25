import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-update-demande-depot',
  templateUrl: './update-demande-depot.component.html',
  styleUrls: ['./update-demande-depot.component.scss']
})
export class UpdateDemandeDepotDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
