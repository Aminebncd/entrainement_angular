import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})


export class ShippingComponent implements OnInit {
  constructor(private cartService: CartService) {
  }

  shippingCosts!: Observable<any>;

  ngOnInit(): void {
    this.shippingCosts =
        this.cartService.getShippingPrices();

    this.shippingCosts
        .subscribe(data => {
      console.log(data);
    });
  }
}