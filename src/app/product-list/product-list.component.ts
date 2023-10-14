// src/app/product-list/product-list.component.ts
import { Component } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[] = [
    new Product(1, 'Product 1', 10, 'Description 1', 1, 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/r/8/k/-original-imagtyxcgmgvtm7y.jpeg?q=70'),
    new Product(2, 'Product 2', 20, 'Description 2', 1, 'https://rukminim2.flixcart.com/image/416/416/xif0q/television/u/7/i/-original-imagu7f3fnssa834.jpeg?q=70'),
    new Product(3, 'Product 3', 30, 'Description 3', 1, 'https://rukminim2.flixcart.com/image/416/416/kuof5ow0/trimmer/7/z/f/0-5-10-mm-bt3101-15-stainless-steel-cordless-philips-original-imag7r4r7ztgnuyk.jpeg?q=70'),
    // Add more products with image URLs
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    const existingProduct = this.cartService.getCartItem(product.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cartService.addToCart(product);
    }
  }
}
