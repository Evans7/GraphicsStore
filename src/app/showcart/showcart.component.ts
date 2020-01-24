import { Component, OnInit } from '@angular/core';
import { products } from '../products'
import  { ServiceCartService } from '../service-cart.service'
@Component({
  selector: 'app-showcart',
  templateUrl: './showcart.component.html',
  styleUrls: ['./showcart.component.css']
})
export class ShowcartComponent implements OnInit {
   items;
  constructor(private cart:ServiceCartService) { }

  ngOnInit() {
    this.items=this.cart.getItems();
  }

}