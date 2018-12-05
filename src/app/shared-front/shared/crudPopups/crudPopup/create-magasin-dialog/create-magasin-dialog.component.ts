import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Magasin } from 'app/models/msmagasindomains/magasin/magasin.model';
import { AngularFireList } from 'angularfire2/database';
import { MagasinService } from 'app/service/magasin.service';

@Component({
  selector: 'app-create-magasin-dialog',
  templateUrl: './create-magasin-dialog.component.html',
  styleUrls: ['./create-magasin-dialog.component.scss']
})
export class CreateMagasinDialogComponent implements OnInit {
  hide = true;
  magasin = {} as Magasin;
  magasinRef$ : AngularFireList<Magasin>;
  constructor(private magasinService : MagasinService) { }

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

  createNewMagasin (){
     console.log(this.magasin);
     this.magasinService.createMagasin({
      nom: this.magasin.nom, 
      ref: this.magasin.ref,
       description: this.magasin.description,
       email: this.magasin.email,
       nIdProprietaire: 0
     });
     this.magasin = {} as Magasin;
      }
}
