// src/app/cart/cart.component.ts
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  get cartItems(): Product[] {
    return this.cartService.getCartItems();
  }

  cartTotalPrice(): number {
    return this.cartService.calculateTotalPrice();
  }

  incrementQuantity(product: Product) {
    product.quantity++;
  }

  decrementQuantity(product: Product) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  removeProduct(product: Product) {
    this.cartService.removeCartItem(product);
  }
}
