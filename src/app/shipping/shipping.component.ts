import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts!: Observable<{ type: string, price: number}[]>;

  //Inject the cart service in ShippingComponent constructor()
  constructor(private cartService: CartService) { }

  //Defining shippingCosts property that sets the shippingCosts property using getShippingPrices()
  //method from the CartService. 
  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}
