import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  items: Product[] = [];


  //addToCart() method appends a product to an array of items
  addToCart(product: Product){
    this.items.push(product);
  }

  //getItems() method collects the items users add to the cart & returns each item with its associated quantity
  getItems(){
    return this.items;

  }


  //clearCart() method returns an empty array of items, which empties the cart
  clearCart(){
    this.items = [];
    return this.items;
  }

  //getShippingPrices() method that uses the HttpClient() get() method. 
  //This will get the shipping data from shipping.json (found in assets)
  getShippingPrices(){
    return this.http.get<{type: string, price: number }[]>
    ('/assets/shipping.json');
  }

  constructor( private http: HttpClient ) { }
}
