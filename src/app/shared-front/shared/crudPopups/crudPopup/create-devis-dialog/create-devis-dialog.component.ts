import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-devis-dialog',
  templateUrl: './create-devis-dialog.component.html',
  styleUrls: ['./create-devis-dialog.component.scss']
})
export class CreateDevisDialogComponent implements OnInit {
  public counter : number = 0;
    
  increment(){
    this.counter += 1;
  }
  
  decrement(){
    this.counter -= 1;
  }
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
