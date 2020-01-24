import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceCartService {
  items= [];
  addToCart(product) {
    this.items.push(product)
  }
  deleteFromCart(product) {
    this.items.pop();
  }
  clearCart(){
    this.items=[]
    return this.items;
  }
  constructor() { 
  }
  getItems(){
    return this.items;
  }
}