import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Data, AppService } from '../../front/app.service';
import { Product } from '../../front/app.models';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('sidenav') sidenav: any;
  public sidenavOpen: boolean = true;
  public brands = [];
  constructor(public appService: AppService) { }
  public topRatedProducts: Array<Product>;
  public viewCol: number = 25;



  ngOnInit() {
    this.getBrands();
    this.getProducts();
    if (window.innerWidth < 960) {
      this.sidenavOpen = false;
    };
    if (window.innerWidth < 1280) {
      this.viewCol = 33.3;
    };
  }
  public getBrands() {
    this.brands = this.appService.getBrands();
  }

  public getProducts() {
    this.appService.getProducts('top-rated').subscribe(data => {
      this.topRatedProducts = data;
    })
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
    (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
  }

}