import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-domaine-activite',
  templateUrl: './domaine-activite.component.html',
  styleUrls: ['./domaine-activite.component.scss']
})
export class DomaineActiviteComponent implements OnInit {
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

  @HostListener('window:resize')
  public onWindowResize(): void {
    (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
  }

}
