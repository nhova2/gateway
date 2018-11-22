import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'app/globals/Globals.element';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor( private router: Router, private globals: Globals) { }

  username: string;
  password: string;

  ngOnInit() {
    
  }
 
  login (): void {
    if (this.username === 'admin' && this.password === 'admin'){
		console.log("auth admin");
		this.globals.role="administrateur";
      this.router.navigate(['main']);
    }
    else if (this.username === 'banq' && this.password === 'banq') {
		console.log("auth banq");
		this.globals.role="banque";
      this.router.navigate(['banque']);
     
    }
    else if (this.username === 'acheteur' && this.password === 'acheteur') {
		console.log("auth acheteur");
		this.globals.role="acheteur";
      this.router.navigate(['shopping']);
      
    }
	else if (this.username === 'anim' && this.password === 'anim') {
		console.log("auth anim");
		this.globals.role="animateur";
      this.router.navigate(['main-anim']);
     
    }
    else if (this.username === 'fourniss' && this.password === 'fourniss') {
		console.log("auth fournisseur");
		this.globals.role="fournisseur";
      this.router.navigate(['main-magasin']);
      
    }
	else if (this.username === 'multi' && this.password === 'multi') {
		console.log("auth multiuser");
		  this.globals.role="multiuser";
      this.router.navigate(['muser-main']);
      //this.router.navigate(['main-muser-entry']);
    }
    else{
      alert('login ou mot de passe invalide');
    }
  }

}
