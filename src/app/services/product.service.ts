import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

  
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 0, name: 'PC', price: 1500},
    { id: 1, name: 'Headphones', price: 100}, 
    { id: 2, name: 'iPad', price: 900}
  ];

  getProducts(): Observable<any[]> {
    return of(this.products);  // Returns products as an Observable
  }
  getProductById(id: number): Observable<{ id: number, name: string, price: number } | undefined> {
    const product = this.products.find(product => product.id === id);
    return of(product); // Return the product as an Observable
  }
}
