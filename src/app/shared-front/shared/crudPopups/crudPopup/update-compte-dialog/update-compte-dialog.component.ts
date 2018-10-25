import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-compte-dialog',
  templateUrl: './update-compte-dialog.component.html',
  styleUrls: ['./update-compte-dialog.component.scss']
})
export class UpdateCompteDialogComponent implements OnInit {
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
