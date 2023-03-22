
import { Product } from '../products';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CartService {


  items: Product[] = [];
  constructor(
      private http: HttpClient
  ) { }


  getShippingPrices(): Observable<any>
  {  let headers = new HttpHeaders({
    'x-rapidapi-host': 'cellphones.p.rapidapi.com',
    'x-rapidapi-key': '4f431f839emsh3c9b90657ba306ap100086jsnff19450ecbad'
  });

    let MonObservable =
    this.http
        .get<any>('https://cellphones.p.rapidapi.com/phones/getbrands', {
          headers: headers
        });

    return MonObservable;
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
