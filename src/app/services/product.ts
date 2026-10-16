import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 999,
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Mouse',
      price: 25,
      category: 'Accessories'
    },
    {
      id: 3,
      name: 'Keyboard',
      price: 75,
      category: 'Accessories'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}