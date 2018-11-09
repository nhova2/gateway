import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor( private router: Router) { }

  username: string;
  password: string;

  ngOnInit() {
    
  }
 
  login (): void {
    if (this.username === 'banq' && this.password === 'banq'){
      this.router.navigate(['banque']);
    }
    else if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['main']);
     
    }
    else if (this.username === 'acheteur' && this.password === 'acheteur') {
      this.router.navigate(['shopping']);
      
    }
    else{
      alert('login ou mot de passe invalide');
    }
  }

}
