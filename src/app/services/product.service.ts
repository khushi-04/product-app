import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

  
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 1, name: 'Laptop', price: 1200, description: 'High-performance laptop' },
    { id: 2, name: 'Phone', price: 800, description: 'Latest model smartphone' },
    { id: 3, name: 'Headphones', price: 200, description: 'Noise-canceling headphones' }
  ];

  getProducts(): Observable<any[]> {
    return of(this.products);  // Returns products as an Observable
  }

  getProductById(id: number): Observable<any> {
    return of(this.products.find(product => product.id === id));
  }
}
