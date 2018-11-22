import { Component, OnInit } from '@angular/core';
import { Data, AppService } from '../../../front/app.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {

  public counter: number = 0;
  product = "empty";
  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }
  displayedColumns = ['product', 'name', 'price', 'quantity'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  total = [];
  grandTotal = 0;
  constructor(public appService: AppService) { }

  ngOnInit() {
    this.appService.Data.cartList.forEach(product => {
      this.total[product.id] = product.newPrice;
      this.grandTotal += product.newPrice;
    })
  }

  public getTotalPrice(value) {
    if (value) {
      this.total[value.productId] = value.total;
      this.grandTotal = 0;
      this.total.forEach(price => {
        this.grandTotal += price;
      })
    }
  }

  public remove(product) {
    const index: number = this.appService.Data.cartList.indexOf(product);
    if (index !== -1) {
      this.appService.Data.cartList.splice(index, 1);
      this.grandTotal = this.grandTotal - this.total[product.id];
      this.total.forEach(val => {
        if (val == this.total[product.id]) {
          this.total[product.id] = 0;
        }
      })
    }
  }

  public clear() {
    this.appService.Data.cartList.length = 0;
  }

}
export interface Element {
  product: string;
  name: string;
  price: number;
  quantity: number;
}
const ELEMENT_DATA: Element[] = [
  { product: '1', name: 'John', price: 100, quantity: 1 },
  { product: '1', name: 'Mike', price: 100, quantity: 1 },
  { product: '1', name: 'Ricky', price: 100, quantity: 1 },
  { product: '1', name: 'Martin', price: 100, quantity: 1 },
  { product: '1', name: 'Tom', price: 100, quantity: 1 }
];
