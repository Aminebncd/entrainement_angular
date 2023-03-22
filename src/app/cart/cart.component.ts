import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { CartService } from './cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();
  shippingCosts!: Observable<{ type: string, price: number }[]>;

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(

      private formBuilder: FormBuilder,
      private cartService: CartService
  ) { }


  onSubmit(): void {


    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}




