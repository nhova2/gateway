import { Component, OnInit,ViewChild, HostListener  } from '@angular/core';

@Component({
    selector: 'app-produit',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
  })

export class ServiceComponent {
  @ViewChild('sidenav') sidenav: any;
  public sidenavOpen: boolean = true;
  public brands = [];
  constructor() { }
  public viewCol: number = 25;

  ngOnInit() {
    if (window.innerWidth < 960) {
      this.sidenavOpen = false;
    };
    if (window.innerWidth < 1280) {
      this.viewCol = 33.3;
    };
  }
}