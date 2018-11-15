import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-ajout-pret-dialog',
  templateUrl: './ajout-pret-dialog.component.html',
  styleUrls: ['./ajout-pret-dialog.component.scss']
})
export class AjoutPretDialogComponent implements OnInit {
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

 
}