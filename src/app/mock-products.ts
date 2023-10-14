// src/app/mock-products.ts
import { Product } from './product.model';

export const MOCK_PRODUCTS: Product[] = [
  new Product(1, 'Product 1', 10, 'Description for Product 1'),
  new Product(2, 'Product 2', 20, 'Description for Product 2'),
  new Product(3, 'Product 3', 30, 'Description for Product 3'),
  new Product(4, 'Product 4', 40, 'Description for Product 4'),
  // Add more products here
];
