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
    if (this.username === 'admin' && this.password === 'admin'){
		console.log("auth admin");
      this.router.navigate(['main']);
    }
    else if (this.username === 'banq' && this.password === 'banq') {
		console.log("auth banq");
      this.router.navigate(['banque']);
     
    }
    else if (this.username === 'acheteur' && this.password === 'acheteur') {
		console.log("auth acheteur");
      this.router.navigate(['shopping']);
      
    }
	else if (this.username === 'anim' && this.password === 'anim') {
		console.log("auth anim");
      this.router.navigate(['main-anim']);
     
    }
    else if (this.username === 'fourniss' && this.password === 'fourniss') {
		console.log("auth fournisseur");
      this.router.navigate(['main-magasin']);
      
    }
	else if (this.username === 'multi' && this.password === 'multi') {
		console.log("auth multiuser");
      this.router.navigate(['main-mode-fournisseur']);
      
    }
    else{
      alert('login ou mot de passe invalide');
    }
  }

}
