import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  //Gather user's name & address using the FormBuilder.group() method
  //This methos sets the checkoutForm property to a form model containing name & address fields
  checkoutForm = this.formBuilder.group({ name: '', address: ''});

  //Injecting CartService & FormBuilder in the CartComponent constructor()
  constructor( private cartService: CartService, private formBuilder: FormBuilder) { }

//onSubmit() method process the form. Allows users to submit their name & address
//This method uses clearCart() method of the CartService to reset the form & clear the cart.
  onSubmit(): void{
      //Process checkout data here
      this.items = this.cartService.clearCart();
      console.warn('Your order has been submitted', this.checkoutForm.value);
      this.checkoutForm.reset();
  }

  ngOnInit(): void {
  }

}
