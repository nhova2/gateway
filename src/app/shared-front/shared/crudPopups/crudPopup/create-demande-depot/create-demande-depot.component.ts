import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-demande-depot',
  templateUrl: './create-demande-depot.component.html',
  styleUrls: ['./create-demande-depot.component.scss']
})
export class CreateDemandeDepotDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
