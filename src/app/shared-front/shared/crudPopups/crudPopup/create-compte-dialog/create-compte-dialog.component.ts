import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-compte-dialog',
  templateUrl: './create-compte-dialog.component.html',
  styleUrls: ['./create-compte-dialog.component.scss']
})
export class CreateCompteDialogComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor() { }

  ngOnInit() {}
  
  getErrorMessage() {
    return this.email.hasError('required') ? 'Vous devez entrer une adresse!' :
        this.email.hasError('email') ? 'Email invalide!' :
            '';
  }

 
}
