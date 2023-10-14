// src/app/cart.service.ts
import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  addToCart(product: Product) {
    this.cart.push(product);
  }

  getCartItems() {
    return this.cart;
  }

  getCartItem(productId: number): Product | undefined {
    return this.cart.find(item => item.id === productId);
  }

  calculateTotalPrice(): number {
    return this.cart.reduce((total, product) => total + product.price * product.quantity, 0);
  }

  removeCartItem(product: Product) {
    const index = this.cart.findIndex(item => item.id === product.id);

    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }
}
