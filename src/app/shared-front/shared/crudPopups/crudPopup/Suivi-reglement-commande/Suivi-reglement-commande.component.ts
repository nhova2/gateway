import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-suivi-reglement-commande-dialog',
  templateUrl: './Suivi-reglement-commande.component.html',
  styleUrls: ['./Suivi-reglement-commande.component.scss']
})
export class SuiviReglementCommandeComponent implements OnInit {
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