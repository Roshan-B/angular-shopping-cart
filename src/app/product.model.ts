// src/app/product.model.ts
export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public description: string,
    public quantity: number = 1,
    public image: string // Add the 'image' property for the product image URL
  ) {}
}
