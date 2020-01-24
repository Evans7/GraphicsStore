import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import  { ServiceCartService } from '../service-cart.service'
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
   products;
  constructor(private route:ActivatedRoute,
  private cart:ServiceCartService) { }
  addToProducts(products){
    window.alert("This item has been added to cart!");
    this.cart.addToCart(products);
  }
  RemoveFromProducts(products){
    window.alert("This item has been removed from cart!");
    this.cart.deleteFromCart(products);
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.products=products[+params.get('productId')];
    });
  }
}
