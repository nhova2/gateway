import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-devis-dialog',
  templateUrl: './update-devis-dialog.component.html',
  styleUrls: ['./update-devis-dialog.component.scss']
})
export class UpdateDevisDialogComponent implements OnInit {
  hide = true;
  counter = 0;
  grandTotal = 0;
  product = 0;
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
 
  clear() {
  }

  decrement() {
  }

  increment() {
  }

  remove(product) {
  }
}
