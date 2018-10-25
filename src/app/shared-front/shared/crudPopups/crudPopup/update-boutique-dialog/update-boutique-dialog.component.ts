import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-boutique-dialog',
  templateUrl: './update-boutique-dialog.component.html',
  styleUrls: ['./update-boutique-dialog.component.scss']
})
export class UpdateBoutiqueDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'Vous devez entrer une adresse!' :
        this.email.hasError('email') ? 'Email invalide!' :
            '';
  }
}
