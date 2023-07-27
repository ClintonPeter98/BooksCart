import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private cartValue = 0;

  constructor() { }

  getUserData = () => {
    return {
      name: 'Guru',
      designation: 'Web developer',
      place: 'Vizag'
    }
  }

  setCartValue = (cart: number) =>{
    this.cartValue = cart;
  }
  getCartValue = () => this.cartValue;
}
