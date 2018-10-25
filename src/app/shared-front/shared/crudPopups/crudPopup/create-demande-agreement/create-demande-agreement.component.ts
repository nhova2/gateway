import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-demande-agreement',
  templateUrl: './create-demande-agreement.component.html',
  styleUrls: ['./create-demande-agreement.component.scss']
})
export class CreateDemandeAgrementDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'Vous devez entrer une adresse!' :
        this.email.hasError('email') ? 'Email invalide!' :
            '';
  }
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
