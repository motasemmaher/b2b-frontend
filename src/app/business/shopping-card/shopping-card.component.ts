import { Item } from './temp/Item';
import { Component, OnInit } from '@angular/core';
import stores from './temp/data';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent implements OnInit {

  cart = stores;

  constructor() { }

  ngOnInit(): void {
  }

  add(product: any){
    this.cart.forEach(element => {
      if (element.id === product.id){
        element.qauntity += 1;
        return;
      }
    });
  }

  minus(product){
    this.cart.forEach(element => {
      if (element.id === product.id){
        element.qauntity -= 1;
        return;
      }
    });
  }

  remove(product){
    let i = 0;
    this.cart.forEach(element => {
      if (element.id === product.id){
        this.cart.splice(i, 1);
        return;
      }
      i++;
    });
  }

}
